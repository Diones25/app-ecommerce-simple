import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex flex-col items-center">
        <div className="text-xl leading-4 mt-3">A Z</div>
        <IconBrandAmazon size={40} stroke={1} className="-mt-2" />
      </div>
    </Link>
  )
}

export default Logo
