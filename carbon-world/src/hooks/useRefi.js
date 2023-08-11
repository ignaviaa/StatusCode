import * as anchor from '@project-serum/anchor'
import { useEffect, useMemo, useState } from 'react'
import { REFI_PROGRAM_PUBKEY } from '@/constants/index'
import refiIDL from "@/constants/refi.json"
import { SystemProgram } from '@solana/web3.js'
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes'
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
// import { authorFilter } from '../utils'
import { PublicKey } from '@solana/web3.js'
// import { set } from 'date-fns'
// import { tr } from 'date-fns/locale'

export const useRefi = () => {

    const { connection } = useConnection();
    const anchorWallet = useAnchorWallet()
    const { publicKey } = useWallet()

    const [initialized, setInitialized] = useState(false)
    const [transactionPending, setTransactionPending] = useState(false)

    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())

            return new anchor.Program(refiIDL, REFI_PROGRAM_PUBKEY, provider)
        }
    }, [connection, anchorWallet])

    // console.log("program is: ", program)
    useEffect(() => {
        const start = async () => {
            if (program && publicKey && !transactionPending) {
                try {
                    const [profilePda] =
                        await findProgramAddressSync([utf8.encode("INVESTOR_STATE"), publicKey.toBuffer()], program.programId)
                    const profileAccount = await program.account.investorProfile.fetch(profilePda)

                    if (profileAccount) {
                        setInitialized(true)
                    } else {
                        setInitialized(false)
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        }
        start()
    }, [publicKey, program, transactionPending])

    const initializeUser = async () => {
        if (program && publicKey) {
            try {
                setTransactionPending(true)
                const [profilePda] = findProgramAddressSync([utf8.encode('INVESTOR_STATE'), publicKey.toBuffer()], program.programId)

                const tx = await program.methods
                    .initializeInvestor()
                    .accounts({
                        investorProfile: profilePda,
                        authority: publicKey,
                        systemProgram: SystemProgram.programId,
                    }
                    ).rpc()
                setInitialized(true)
            } catch (error) {
                console.log(error)
            } finally {
                setTransactionPending(false)
            }
        }
    }

    return { initialized, initializeUser }
}