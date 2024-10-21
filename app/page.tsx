import Image from "next/image";
import styles from "./page.module.css";
import banner_img from '@/image/banner.png'
import banner_img_bt from '@/image/banner_bottom.svg'
import Banner from "@/components/banner/page.module";
import Services from "@/components/services/page.module";
import Work from "@/components/Work/page.module";
import Clients from "@/components/Clients/page.module";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner/>
      <Services/>
      <Work/>
      <Clients/>
    </div>
  );
}
