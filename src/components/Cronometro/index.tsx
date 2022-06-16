import Botao from "../Botao"
import Relogio from "./Relogio"
import style from "./Cronometro.module.scss"
import { ITarefa } from "../../types/tarefa"
import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utils/time"
interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {

    const [tempo, setTempo] =
        useState<Number>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))}
    }, [selecionado]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um e inicie o Cronômetro</p>
            Tempo:{tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}