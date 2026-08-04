"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function isVideo(src: string) {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

function MediaItem({ src, className = "" }: { src: string; className?: string }) {
  return isVideo(src) ? (
    <video src={src} controls className={className} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element -- animated GIFs need a plain <img>, next/image freezes them
    <img src={src} alt="" className={className} />
  );
}

export function MediaGallery({ media }: { media: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + media.length) % media.length)),
    [media.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % media.length)),
    [media.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, prev, next]);

  if (media.length === 0) return null;

  return (
    <div className="not-prose mt-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {media.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="bracket-corners group relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background-elevated"
          >
            <MediaItem
              src={src}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-muted transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 text-muted transition-colors hover:text-foreground"
                aria-label="Previous"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 text-muted transition-colors hover:text-foreground"
                aria-label="Next"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div
            className="max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaItem
              src={media[openIndex]}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
