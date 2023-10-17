'use client';
import { useEffect } from "react";

export default function Download() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android|Android/i.test(userAgent) || (navigator.userAgent.toLowerCase().indexOf("android") > -1)) {
            window.location.href = "https://play.google.com/store/apps/details?id=at.safeimnetz.app";
        } else if (/iPad|iPhone|iPod/.test(userAgent) || /Macintosh/.test(userAgent)) {
            window.location.href = "https://apps.apple.com/at/app/safe-im-netz/id6468965798";
        } else {
            window.location.href = "/";
        }
    }, []);

    return (
        <div />
    )
}
