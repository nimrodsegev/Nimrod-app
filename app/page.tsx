import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "10px" }}>Welcome Buddy!</h1>
      <p style={{ color: "#555", marginBottom: "40px" }}>
        Explore the different parts of my project:
      </p>

      {/* Links Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "300px", margin: "0 auto" }}>
        
        <Link href="/tic-tac-toe" style={linkStyle}>
          🎮 Tic Tac Toe Game
        </Link>

        <Link href="/art" style={linkStyle}>
          🎨 Art Page
        </Link>

        <Link href="/design" style={linkStyle}>
          📱 Reciply Design Page
        </Link>

      </div>

      {/* Logos */}
      <div style={{ marginTop: "60px", display: "flex", justifyContent: "center", gap: "30px" }}>
        <Image src="/huji.svg" alt="HUJI Logo" width={80} height={80} priority />
        <Image src="/bezalel.svg" alt="Bezalel Logo" width={80} height={80} priority />
      </div>
    </main>
  );
}

const linkStyle: React.CSSProperties = {
  padding: "12px 18px",
  background: "#f5efe6",
  borderRadius: "10px",
  fontSize: "18px",
  color: "#5F6040",
  textDecoration: "none",
  fontWeight: 600,
  display: "block",
};
