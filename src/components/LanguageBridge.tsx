import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, publicUrl } from '../site'
import { HammerUse } from './HammerUse'

const CLIPS = {
  hammerEn: publicUrl('audio/en-a8cdcac2ee6db3bf.mp3'),
  hammerAm: publicUrl('audio/am-c3f00ee3713fdff1.mp3'),
  sentenceEn: publicUrl('audio/en-c05d27e13d3e4ae5.mp3'),
} as const

type Clip = keyof typeof CLIPS

function HearButton({
  clip,
  label,
  active,
  onPlay,
}: {
  clip: Clip
  label: string
  active: boolean
  onPlay: (clip: Clip) => void
}) {
  return (
    <button
      className={active ? 'hear-button is-playing' : 'hear-button'}
      type="button"
      aria-pressed={active}
      onClick={() => onPlay(clip)}
    >
      <span className="hear-icon" aria-hidden="true" />
      {label}
    </button>
  )
}

export function LanguageBridge() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState<Clip | null>(null)

  useEffect(() => {
    return () => {
      const audio = audioRef.current
      if (!audio) return
      audio.pause()
      audio.removeAttribute('src')
    }
  }, [])

  function play(clip: Clip) {
    const previous = audioRef.current
    if (previous) {
      previous.pause()
      previous.currentTime = 0
    }

    const audio = new Audio(CLIPS[clip])
    audioRef.current = audio
    setPlaying(clip)
    audio.onended = () => {
      if (audioRef.current === audio) {
        audioRef.current = null
        setPlaying(null)
      }
    }
    audio.onerror = () => {
      if (audioRef.current === audio) {
        audioRef.current = null
        setPlaying(null)
      }
    }
    void audio.play().catch(() => {
      if (audioRef.current === audio) {
        audioRef.current = null
        setPlaying(null)
      }
    })
  }

  return (
    <section className="band band-navy bridge">
      <div className="wrap">
        <div className="section-head section-head-light">
          <p className="kicker kicker-light">Occupational language</p>
          <h2>Another language can explain the lesson. English is what the job requires.</h2>
          <p>
            A lesson starts with a picture and two languages, moves into the action English names, then shows the
            same work on a real site. The assessment stays in English.
          </p>
        </div>

        <ol className="bridge-steps">
          <li>
            <span>01</span>
            <h3>Two languages</h3>
            <figure className="bridge-photo">
              <img
                src={publicUrl('media/hammer.jpg')}
                alt="A claw hammer on a wooden work surface."
              />
            </figure>
            <p className="word">Hammer</p>
            <p className="gloss">መዶሻ · a tool used to drive or remove nails.</p>
            <div className="hear-row">
              <HearButton clip="hammerEn" label="Hear English" active={playing === 'hammerEn'} onPlay={play} />
              <HearButton clip="hammerAm" label="Hear Amharic" active={playing === 'hammerAm'} onPlay={play} />
            </div>
          </li>

          <li>
            <span>02</span>
            <h3>Use it</h3>
            <figure className="bridge-photo bridge-photo-scene">
              <HammerUse />
            </figure>
            <p className="word sentence">Use the hammer.</p>
            <p className="gloss">The English names the action on the tool.</p>
            <div className="hear-row">
              <HearButton
                clip="sentenceEn"
                label="Hear the sentence"
                active={playing === 'sentenceEn'}
                onPlay={play}
              />
            </div>
          </li>

          <li>
            <span>03</span>
            <h3>Show it</h3>
            <figure className="bridge-photo bridge-photo-video">
              <video
                className="bridge-video"
                src={publicUrl('media/hammer-drive.mp4')}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="A carpenter drives a nail with a hammer."
              />
            </figure>
            <p className="word">
              <span className="beam-word">Verified</span>
            </p>
            <p className="gloss">The same action on real work. An instructor watches and signs.</p>
          </li>
        </ol>

        <p className="bridge-note">
          Support languages: {LANGUAGES.join(', ')}. The clips are the same Microsoft Edge neural speech used on
          the learning platform. A learner who already knows hammer, drill, and stud is not kept on those words.
          Header, flashing, and joist are where the extra pictures belong. The “Show it” clip is Mixkit stock
          video (royalty-free).
        </p>
      </div>
    </section>
  )
}
