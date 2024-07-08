import Image from "next/image";
import styles from "./page.module.css";
import Orb from "@/components/orb";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between p-1">
      <div className={styles.description}>
        <p>
          Add VapiBlocks components to your Next.js project&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vapiblocks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orb by VapiBlocks
          </a>
        </div>
      </div>
      <Orb />
    </main>
  );
}
