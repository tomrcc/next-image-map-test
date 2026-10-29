import Image from "next/image";
import { resolveImage } from "../../lib/images";

export default function MappedCard({ heading, image }: { heading: string; image: string }) {
  const src = resolveImage(image);
  return (
    <div>
      <h3>{heading}</h3>
      <Image src={src} alt="" width={400} height={200} />
      <p>
        Rendered src: <code>{typeof src === "string" ? src : src.src}</code>
      </p>
    </div>
  );
}
