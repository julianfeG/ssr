"use client";
import {JSX, useState} from "react";

type MenuItem = {
    label: string;
    href: string;
};

const menu: MenuItem[] = [
    { label: "Dashboard", href: "/" },
    { label: "Usuarios", href: "/users" },
    { label: "Configuración", href: "/settings" },
];

export default function Sidebar(): JSX.Element {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <aside
            style={{
        width: open ? 240 : 70,
            transition: "width 0.3s",
            height: "100vh",
            background: "#111",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
    }}
>
    {/* Header */}
    <div
        style={{
        padding: "1rem",
            display: "flex",
            justifyContent: open ? "space-between" : "center",
            alignItems: "center",
            borderBottom: "1px solid #222",
    }}
>
    {open && <span>Mi Panel</span>}

    <button
        onClick={() => setOpen(!open)}
        style={{
        background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "1.2rem",
    }}
    >
    ☰
        </button>
        </div>

        {/* Menu */}
        <nav style={{ padding: "1rem 0", flex: 1 }}>
        {menu.map((item) => (
            <a
                key={item.href}
            href={item.href}
            style={{
            display: "block",
                padding: "0.75rem 1rem",
                color: "#ddd",
                textDecoration: "none",
                whiteSpace: "nowrap",
        }}
        >
            {open ? item.label : item.label.charAt(0)}
            </a>
        ))}
        </nav>

        {/* Footer */}
        {open && (
            <div
                style={{
            padding: "1rem",
                borderTop: "1px solid #222",
                fontSize: "0.8rem",
                color: "#888",
        }}
        >
            v1.0.0
        </div>
        )}
        </aside>
    );
    }
