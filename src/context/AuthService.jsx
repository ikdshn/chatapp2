import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffectとは
  // コールバック関数の実行タイミング調整役
  //   - 第二引数の配列の中に入った変数が切り替わるタイミングで実行
  //   - 初回描写後に一度実行
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // userがログインしていたらuser情報が、していなければnullが入る
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
