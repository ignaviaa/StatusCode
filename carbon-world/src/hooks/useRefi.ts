import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { REFI_PROGRAM_PUBKEY } from "@/constants/index";
import refiIDL from "@/constants/refi.json";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { authorFilter } from "../utils";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { useDataStore } from "@/utils/dataStore";

interface RefiProps {
  typeOfAccount: string;
}

interface NgoLoginProps {
  name_of_ngo: string;
  date_of_ngo_started: string;
  typeOfAccount: string;
}

interface ProjectProps {
  idx: number;
  nameOfProject: string;
  startYear: string;
  projectLead: string;
  location: string;
  category: string;
  description: string;
  fundingRaised: string;
  projectImage: string;
  carbonCaptured: number;
}

const value = new anchor.BN(1);

export const useRefi = ({ typeOfAccount }: RefiProps) => {
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();
  const { publicKey } = useWallet();

  const updateNgoName = useDataStore((state) => state.updateNgoName);

  const [initialized, setInitialized] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectsMade, setProjectsMade] = useState(0);

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions(),
      );

      return new anchor.Program(refiIDL, REFI_PROGRAM_PUBKEY, provider);
    }
  }, [connection, anchorWallet]);

  // console.log("program is: ", program)
  useEffect(() => {
    const start = async () => {
      if (program && publicKey && !transactionPending) {
        try {
          if (typeOfAccount === "INVESTOR") {
            const [profilePda] = await findProgramAddressSync(
              [utf8.encode("INVESTOR_STATE"), publicKey.toBuffer()],
              program.programId,
            );
            const profileAccount = await program.account.investorProfile.fetch(
              profilePda,
            );

            if (profileAccount) {
              setInitialized(true);
            } else {
              setInitialized(false);
            }
          } else if (typeOfAccount === "NGO") {
            const [profilePda] = await findProgramAddressSync(
              [utf8.encode("NGO_STATE"), publicKey.toBuffer()],
              program.programId,
            );
            const profileAccount = await program.account.ngoProfile.fetch(
              profilePda,
            );

            if (profileAccount) {
              setInitialized(true);
            } else {
              setInitialized(false);
            }
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setInitialized(false);
      }
    };
    start();
    //eslint-disable-next-line
  }, [publicKey, program, transactionPending]);

  const x = new PublicKey("9aYZU8Ed6cfHbqQNHXtjXLqPsLq1p9ft7Wv6n3vYHZFN");
  const y = new PublicKey("91znXXrPcYGwQMS3EpBfsGQtXWYMHkrNRBNyrGtsLFTf");

  const findTo = async () => {
    const getTo = await getAssociatedTokenAddress(x, y);
    console.log(getTo.toBase58());
  };

  // console.log(typeOfAccount);
  const initializeUser = async () => {
    if (program && publicKey) {
      try {
        if (typeOfAccount === "INVESTOR") {
          setTransactionPending(true);
          const [profilePda] = findProgramAddressSync(
            [utf8.encode("INVESTOR_STATE"), publicKey.toBuffer()],
            program.programId,
          );

          const tx = await program.methods
            .initializeInvestor()
            .accounts({
              investorProfile: profilePda,
              authority: publicKey,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
          setInitialized(true);
        } else if (typeOfAccount === "NGO") {
          setTransactionPending(true);
          const [profilePda] = findProgramAddressSync(
            [utf8.encode("NGO_STATE"), publicKey.toBuffer()],
            program.programId,
          );

          const tx = await program.methods
            .initializeNgo()
            .accounts({
              ngoProfile: profilePda,
              authority: publicKey,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
          setInitialized(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTransactionPending(false);
      }
    }
  };

  const addProject = async ({
    idx,
    nameOfProject,
    startYear,
    projectLead,
    location,
    category,
    description,
    fundingRaised,
    projectImage,
    carbonCaptured,
  }: ProjectProps) => {
    console.log(
      idx,
      nameOfProject,
      startYear,
      projectLead,
      location,
      category,
      description,
      fundingRaised,
      projectImage,
      carbonCaptured,
      "YOOO",
    );
    if (program && publicKey) {
      setTransactionPending(true);
      setLoading(true);
      try {
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("NGO_STATE"), publicKey.toBuffer()],
          program.programId,
        );
        const [ngoPda] = findProgramAddressSync(
          [
            utf8.encode("NEWPROJECT_STATE"),
            publicKey.toBuffer(),
            Uint8Array.from([projectsMade]),
          ],
          program.programId,
        );

        console.log(
          publicKey.toString(),
          program.programId,
          profilePda.toString(),
          ngoPda.toString(),
          projectsMade,
        );

        await program.methods
          .addProject(
            idx,
            nameOfProject,
            startYear,
            projectLead,
            location,
            category,
            description,
            fundingRaised,
            projectImage,
            carbonCaptured,
          )
          .accounts({
            ngoProfile: profilePda,
            ngoProject: ngoPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc();
      } catch (error) {
        console.error(error);
      } finally {
        setTransactionPending(false);
        setLoading(false);
      }
    }
  };

  const sendSol = async ({ to }: { to: string }) => {
    if (program && publicKey) {
      try {
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("NGO_STATE"), publicKey.toBuffer()],
          program.programId,
        );
        console.log(profilePda);

        await program.methods
          .transferLamports(value)
          .accounts({
            from: publicKey,
            to: to,
            systemProgram: SystemProgram.programId,
          })
          .rpc();
      } catch (error) {
        console.log(error);
      } finally {
        setTransactionPending(false);
        setLoading(false);
      }
    }
  };

  const test = ({ hi }: { hi: string }) => {
    console.log(hi);
    updateNgoName("by");
  };

  const addNgoTest = async (typeOfAccount: string) => {
    if (program && publicKey) {
      setTransactionPending(true);
      setLoading(true);
      if (typeOfAccount === "NGO") {
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("NEWPROJECT_STATE"), publicKey.toBuffer()],
          program.programId,
        );
        const data = await program.account.ngoAccount.all([
          authorFilter(publicKey.toString()),
        ]);
        console.log(data);
        return data;
      } else if (typeOfAccount === "INVESTOR") {
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("INVEST_STATE"), publicKey.toBuffer()],
          program.programId,
        );
        const data = await program.account.investorAccount.all([
          authorFilter(publicKey.toString()),
        ]);
        console.log(data);
        return data;
      }
    }
  };

  const addNgoAccount = async ({
    name_of_ngo,
    date_of_ngo_started,
    typeOfAccount,
  }: NgoLoginProps) => {
    console.log({ name_of_ngo, date_of_ngo_started });
    if (program && publicKey) {
      setTransactionPending(true);
      setLoading(true);
      console.log({ name_of_ngo, date_of_ngo_started });
      try {
        if (typeOfAccount === "NGO") {
          const [ngoPda] = findProgramAddressSync(
            [utf8.encode("NAME_STATE"), publicKey.toBuffer()],
            program.programId,
          );

          await program.methods
            .addNgo(name_of_ngo, date_of_ngo_started)
            .accounts({
              ngoAccount: ngoPda,
              authority: publicKey,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
        } else if (typeOfAccount === "INVESTOR") {
          const [investorPda] = findProgramAddressSync(
            [utf8.encode("INVEST_STATE"), publicKey.toBuffer()],
            program.programId,
          );

          await program.methods
            .addInvestor(name_of_ngo, date_of_ngo_started)
            .accounts({
              investorAccount: investorPda,
              authority: publicKey,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTransactionPending(false);
        setLoading(false);
      }
    }
  };

  const updateNgoDashboard = async () => {
    if (program && publicKey) {
      setTransactionPending(true);
      setLoading(true);
      const data = await program.account.ngoAccount.all([
        authorFilter(publicKey.toString()),
      ]);
      // console.log(data[0].account.nameOfNgo);
      updateNgoName(data[0].account.nameOfNgo);
      // updateNgoName("bye");
    }
  };
  return {
    initialized,
    initializeUser,
    addProject,
    sendSol,
    addNgoAccount,
    test,
    addNgoTest,
    updateNgoDashboard,
    findTo,
  };
};
