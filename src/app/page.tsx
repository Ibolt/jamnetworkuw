import Image from "next/image";

export default function Home() {
  const logo = (
    <Image
      src="/media/JN-minimal-logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );

  return (
    <main style={{ padding: "8em" }}>
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 300 }}>Welcome To</p>
            <h1 className={"title"}>JamNetwork UW</h1>
            <p style={{ fontSize: "28px" }}>
              A music club at the University of Waterloo open to musicians of
              all styles, genres, and levels of experience!
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <button>Get In Touch</button>
            <button>Join Our Discord</button>
          </div>
        </div>
        <div>{logo}</div>
      </div>
    </main>
  );
}
