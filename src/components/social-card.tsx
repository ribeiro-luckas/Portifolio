import { site } from "@/content/site";

export function SocialCard() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "64px 76px",
        background: "#0d101b",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -80,
          width: 650,
          height: 650,
          border: "2px solid #74541f",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -70,
          right: 30,
          width: 430,
          height: 430,
          border: "1px solid #74541f",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          color: "#f4ab30",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 3,
        }}
      >
        <span style={{ width: 42, height: 2, background: "#f4ab30" }} />
        {site.area.toUpperCase()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 700,
            letterSpacing: -7,
            lineHeight: 0.97,
          }}
        >
          {site.name}
          <span style={{ color: "#f4ab30" }}>.</span>
        </div>
        <div style={{ color: "#c4ccda", fontSize: 28 }}>
          Projetos, estudos e ideias em evolução.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #3d465b",
          paddingTop: 20,
          color: "#c4ccda",
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        <span>PORTFÓLIO</span>
        <span>github.com/ribeiro-luckas</span>
      </div>
    </div>
  );
}
