import Head from "next/head";

type Props = {
  title?: string;
};

export default function HeadTag({ title }: Props) {
  return (
    <Head>
      <title>{title ? `${title} | Mediconnect` : "Mediconnect"}</title>
    </Head>
  );
}
