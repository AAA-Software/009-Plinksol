import prismadb from "@/lib/prismadb";
import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  profilePic?: string;
}

interface Wallet {
  balance: number;
}

interface State {
  user: User;
  wallet: Wallet;
  isWalletLoading: boolean;
  setBalance: (balance: number) => void;
  getBalance: () => Promise<void>;
  updateBalance: (newBalance: number) => Promise<void>;
}

const userInitialState: User = {
  id: "",
  name: "",
  email: "",
};

const walletInitialState: Wallet = {
  balance: 1000000,
};

export const useAuthStore = create<State>((setState, getState) => ({
  user: userInitialState,
  wallet: walletInitialState,
  isWalletLoading: false,
  setBalance: (balance: number) => {
    setState((state) => ({
      ...state,
      wallet: { ...state.wallet, balance },
    }));
  },
  getBalance: async () => {
    try {
      const user = await prismadb.user.findUnique({
        where: { id: getState().user.id },
        select: { walletBalance: true },
      });
      if (user) {
        setState((state) => ({
          ...state,
          wallet: { balance: parseFloat(user.walletBalance || "0") },
        }));
      }
    } catch (error) {
      console.error("getBalanceError", error);
    }
  },
  updateBalance: async (newBalance: number) => {
    try {
      await prismadb.user.update({
        where: { id: getState().user.id },
        data: { walletBalance: newBalance.toString() },
      });
      setState((state) => ({
        ...state,
        wallet: { ...state.wallet, balance: newBalance },
      }));
    } catch (error) {
      console.error("updateBalanceError", error);
    }
  },
}));
