import type { ReactNode } from 'react'

/** Short label set into a steel plate — use sparingly on one-word titles. */
export function BeamWord({ children, small }: { children: ReactNode; small?: boolean }) {
  return <span className={small ? 'beam-word beam-word-sm' : 'beam-word'}>{children}</span>
}
