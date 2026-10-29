import fs from "node:fs";
import matter from "gray-matter";
import Image from "next/image";
import MappedCard from "./components/MappedCard";
import { resolveImage } from "../lib/images";

export default function Page() {
  const { data } = matter(fs.readFileSync("content/pages/index.md", "utf8"));
  const mapped = resolveImage(data.mapped_image);

  return (
    <>
      <h1>{data.title}</h1>

      <h2>A. Public image, image region</h2>
      <editable-image data-prop-src="public_image">
        <Image src={data.public_image} alt="" width={400} height={200} />
      </editable-image>

      <h2>B. Mapped image, image region</h2>
      <editable-image data-prop-src="mapped_image">
        <Image src={mapped} alt="" width={400} height={200} />
      </editable-image>
      <p>
        Rendered src: <code>{typeof mapped === "string" ? mapped : mapped.src}</code>
      </p>

      <h2>C. Mapped image, registered component</h2>
      <editable-component data-component="mapped-card" data-prop="card">
        <MappedCard {...data.card} />
      </editable-component>
    </>
  );
}
