// app/providers.tsx
"use client"; // Client bileşeni olarak tanımla

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// Redux store'u provider ile sarmalayarak tüm uygulama boyunca store'a erişim sağlamamızı sağlar.

export default function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
