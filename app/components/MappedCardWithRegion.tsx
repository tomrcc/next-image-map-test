import Image from "next/image";
import { resolveImage } from "../../lib/images";

export default function MappedCardWithRegion({ heading, image }: { heading: string; image: string }) {
  const src = resolveImage(image);
  return (
    <div>
      <h3>{heading}</h3>
      <editable-image data-prop-src="image">
        <Image src={src} alt="" width={400} height={200} />
      </editable-image>
      <p>
        Rendered src: <code>{typeof src === "string" ? src : src.src}</code>
      </p>
    </div>
  );
}
