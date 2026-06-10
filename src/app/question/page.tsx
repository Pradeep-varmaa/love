'use client'

import React, {
    useEffect,
    useRef,
    useState
} from 'react'
import { useRouter } from 'next/navigation'

import style from './page.module.css'

import { AnimatedBackground } from '@/components/AnimatedBackground'

const questionsdata = [

    {
        id: 1,
        question: "Naalo Neku Baga Nacchina Vishesham Emti ?",
        type: 'input',
        isswapped: false
    },

    {
        id: 2,
        question: "Naalo Neku Assala Nacchani Vishesham Emti ?",
        type: 'input',
        isswapped: false
    },
    {
        id: 3,
        question: "Life Long Natho Thoduga Nadusthava ?",
        type: 'input',
        isswapped: false
    },{
        id: 4,
        question: "EE Okkasariki Nannu Kshaminchesthaav Kadha? Pls Call Back Chai ?",
        type: 'input',
        isswapped: false
    },

    {
        id: 5,
        question: "Did You Love ME?",
        type: 'option',
        isswapped: true
    },

]

const Question = () => {

    const router = useRouter()

    const noBtnRef =
        useRef<HTMLButtonElement | null>(null)

    const [qindex, setQindex] = useState(0)

    const [inputValue, setInputValue] = useState('')

    const [loading, setLoading] = useState(false)

    const [answers, setAnswers] = useState<any[]>([])

    const [moveNoBtn, setMoveNoBtn] = useState({
        x: 0,
        y: 0
    })

    const currentquestion =
        questionsdata[qindex]

    // NEXT QUESTION

    const nextquestion = () => {

        // Save input answer
        if (currentquestion.type === 'input') {

            const updatedAnswers = [
                ...answers,
                {
                    question: currentquestion.question,
                    answer: inputValue
                }
            ]

            setAnswers(updatedAnswers)

            setInputValue('')
        }

        if (qindex < questionsdata.length - 1) {

            setQindex(prev => prev + 1)

        }

    }

    // NO BUTTON MOVE

    useEffect(() => {

        const handleMouseMove = (
            e: MouseEvent
        ) => {

            if (
                !currentquestion.isswapped
            ) return

            const btn =
                noBtnRef.current

            if (!btn) return

            const rect =
                btn.getBoundingClientRect()

            // Button center
            const btnX =
                rect.left + rect.width / 2

            const btnY =
                rect.top + rect.height / 2

            // Mouse position
            const mouseX = e.clientX
            const mouseY = e.clientY

            // Distance
            const distance =
                Math.sqrt(
                    Math.pow(mouseX - btnX, 2) +
                    Math.pow(mouseY - btnY, 2)
                )

            // 10cm approx ≈ 380px
            if (distance < 380) {

                const randomX =
                    Math.random() * 400 - 200

                const randomY =
                    Math.random() * 400 - 200

                setMoveNoBtn({
                    x: randomX,
                    y: randomY
                })

            }

        }

        window.addEventListener(
            'mousemove',
            handleMouseMove
        )

        return () => {

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            )

        }

    }, [currentquestion])

    // YES CLICK

    const handleYes = async () => {

        setLoading(true)

        const finalAnswers = [

            ...answers,

            {
                question: currentquestion.question,
                answer: "Yes ❤️"
            }

        ]

        try {


            const res = await fetch(
                "/api/send-love-mail",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        answers: finalAnswers
                    })
                }
            )

            const data = await res.json()

            console.log(data)

            // MOVE TO GIFT PAGE

            router.push('/gift-box')

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

    }

    return (

        <div className={style.container}>

            <AnimatedBackground />

            <div className={style.questionCard}>

                <h1 className={style.question}>
                    {currentquestion.question}
                </h1>


                {currentquestion.type === "input" && (

                    <div className={style.inputSection}>

                        <input
                            type="text"

                            placeholder="Type your answer..."

                            className={style.input}

                            value={inputValue}

                            onChange={(e) =>
                                setInputValue(
                                    e.target.value
                                )
                            }
                        />

                        <button
                            className={style.nextBtn}
                            onClick={nextquestion}
                            disabled={!inputValue}
                        >
                            Next
                        </button>

                    </div>

                )}

                {/* OPTION QUESTION */}

                {currentquestion.type === "option" && (

                    <div className={style.optionContainer}>

                        <button
                            className={style.yesBtn}
                            onClick={handleYes}
                            disabled={loading}
                        >
                            {
                                loading
                                    ? "Redirecting..."
                                    : "Yes ❤️"
                            }
                        </button>

                        <button
                            ref={noBtnRef}
                            className={style.noBtn}
                            style={{
                                transform:
                                    `translate(${moveNoBtn.x}px, ${moveNoBtn.y}px)`
                            }}
                        >
                            No 😢
                        </button>
                    </div>

                )}

            </div>

        </div>

    )

}

export default Question