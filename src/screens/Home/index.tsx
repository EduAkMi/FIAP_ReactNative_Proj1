// UseCases
import { useDisplay, useIncrement, useNextCheckpoint } from "../../hooks";

// Components
import { Image, SafeAreaView, Text } from "react-native";
import { GradientBackground } from "../../components/GradientBackground";
import { Button } from "../../components/Button";

// Styles
import styles from "./styles";

const CHECKPOINT_NAME = 1
const CHECKPOINT_AGE = 3
const CHECKPOINT_RESIDENT = 5
const CHECKPOINT_PROFESSION = 9
const CHECKPOINT_GITHUB = 12
const CHECKPOINT_HOBBIES = 15
const CHECKPOINT_RECOMMENDATIONS = 20
const CHECKPOINT_SECRET = 40

function Home() {

    const { 
        increment,
        count
    } = useIncrement()
    
    const {
        nextCheckpoint,
        secret
    } = useNextCheckpoint(
        count,
        CHECKPOINT_SECRET,
        new Array(
            CHECKPOINT_NAME, CHECKPOINT_AGE, CHECKPOINT_RESIDENT, CHECKPOINT_PROFESSION, 
            CHECKPOINT_GITHUB, CHECKPOINT_HOBBIES, CHECKPOINT_RECOMMENDATIONS
        )
    )

    const name = useDisplay(CHECKPOINT_NAME, count, "", "Eduardo Misina, muito prazer")
    const age = useDisplay(CHECKPOINT_AGE, count, "Idade", "29")
    const resident = useDisplay(CHECKPOINT_RESIDENT, count, "Mora em", "Campinas")
    const profession = useDisplay(CHECKPOINT_PROFESSION, count, "Profissão", "Desenvolvedor Android")
    const github = useDisplay(CHECKPOINT_GITHUB, count, "Github", "https://github.com/EduAkMi")
    const hobbies = useDisplay(CHECKPOINT_HOBBIES, count, "Hobbies", "Passear com as cachorras, tocar violão e pensar em ideias para app ")
    const recommendations = useDisplay(CHECKPOINT_RECOMMENDATIONS, count, "Recomendação de filmes", "A Baleia, Interstellar, Amadeus")

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                { secret ? <Text style={styles.title}>É meu telefone, fique a vontade para me enviar qualquer mensagem :)</Text> : <Text style={styles.title}>Quer saber mais?</Text>}
                { secret ? null : <Text style={styles.counter}>{'Contador: ' + count}</Text>}
                <Button 
                    onPress={() => increment(1)}
                    text={nextCheckpoint}
                    primary = {true}
                    marginVertical = {true}
                />

                <Text style={styles.body}>Olá, meu nome é...</Text>
                { name.display && <Text style={styles.body}>{name.value}</Text>}
                { name.display && <Image source={{uri: "https://avatars.githubusercontent.com/u/4194456?v=4"}} style={styles.repoUserImg} />}
                { age.display && <Text style={styles.body}>{age.prefix}: {age.value}</Text>}
                { resident.display && <Text style={styles.body}>{resident.prefix}: {resident.value}</Text>}
                { profession.display && <Text style={styles.body}>{profession.prefix}: {profession.value}</Text>}
                { github.display && <Text style={styles.body}>{github.prefix}: {github.value}</Text>}
                { hobbies.display && <Text style={styles.body}>{hobbies.prefix}: {hobbies.value}</Text>}
                { recommendations.display && <Text style={styles.body}>{recommendations.prefix}: {recommendations.value}</Text>}
                { secret && <Text style={styles.body}>Telefone: 16 99623-1182</Text>}
            </SafeAreaView>
        </GradientBackground>
    );
}

export { Home };
