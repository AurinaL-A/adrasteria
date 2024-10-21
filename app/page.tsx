import Image from "next/image";
import styles from "./page.module.css";
import banner_img from '@/image/banner.png'
import banner_img_bt from '@/image/banner_bottom.svg'
import Banner from "@/components/banner/banner.module";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner/>
    </div>
  );
}
