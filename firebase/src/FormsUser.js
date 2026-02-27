import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native';
import { db, auth} from './firebaseConnection';
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc, getDocs, updateDoc } from 'firebase/firestore'

import { UsersList } from './Users';
import { singOut } from 'firebase/auth'

export function FormUsers() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [cargo, setCargo] = useState("")

    const [users, setUsers] = useState("")

    const [showForm, setShowForm] = useState(true)
    const [isEditing, setIsEditing] = useState("")


    useEffect(() => {

        async function getDados() {
            // const docref = doc(db, "users", "2")
            // getDoc(docref)
            // .then((snapshot) => {
            //   setNome(snapshot.data()?.nome)
            // })
            // .catch((err) => {
            //   console.log("error: ")
            //   console.log(err);
            // })

            // onSnapshot(doc(db, "users", "1"), (doc) => {
            //   setNome(doc.data()?.nome)
            // })

            const userRef = collection(db, "users");
            onSnapshot(userRef, (snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        idade: doc.data().idade,
                        cargo: doc.data().cargo
                    })
                })

                setUsers(lista);

            })
            // getDocs(userRef)
            //   .then((snapshot) => {
            //     let lista = [];

            //     snapshot.forEach((doc) => {
            //       lista.push({
            //         id: doc.id,
            //         nome: doc.data().nome,
            //         idade: doc.data().idade,
            //         cargo: doc.data().cargo
            //       });

            //       setUsers(lista); 

            //     })
            //       .catch((err) => {
            //         console.log(err)
            //       })
            //   })

        }


        getDados();
    }, [])


    async function handleRegister() {
        // await setDoc(doc(db, "users", "3"), {
        //   nome: "Jose",
        //   idade: "30",
        //   cargo: "Backend"
        // })
        // .then(() => {
        //   console.log("CADASTRADO COM SUCESSO")
        // })
        // .catch((erro) => {
        //   console.log(erro);
        // })

        await addDoc(collection(db, "users"), {
            nome: nome,
            idade: idade,
            cargo: cargo
        }).then(() => {
            console.log("CADASTRADO COM SUCESSO")
            setNome("")
            setIdade("")
            setCargo("")
            Keyboard.dismiss()

        })
            .catch((err) => {
                console.log(err)
            })

    }

    function handleToggle() {
        setShowForm(!showForm)
    }

    function editUser(data) {
        setNome(data.nome)
        setIdade(data.idade)
        setCargo(data.cargo)
        setIsEditing(data.id)
    }

    async function handleEditUser() {
        const docRef = doc(db, "users", isEditing)
        await updateDoc(docRef, {
            nome: nome,
            idade: idade,
            cargo: cargo,
        })
        setNome("");
        setIdade("");
        setCargo("");
        setIsEditing("");
    }

    async function  handleLogout() {
        await singOut(auth)
    }

    return (
        <View style={styles.container}>
            {showForm && (
                <View>
                    <Text style={styles.label}>Nome:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />

                    <Text style={styles.label}>Idade:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua idade'
                        value={idade}
                        onChangeText={(text) => setIdade(text)}
                    />

                    <Text style={styles.label}>Cargo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu cargo'
                        value={cargo}
                        onChangeText={(text) => setCargo(text)}
                    />



                    {isEditing !== "" ? (
                        <TouchableOpacity onPress={handleEditUser} style={styles.button}>
                            <Text style={styles.buttonText}> Editar Uusário</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Adicionar</Text>
                        </TouchableOpacity>
                    )
                    }


                </View>
            )}
            <TouchableOpacity onPress={handleToggle} style={{ marginTop: 8, }}>
                <Text style={{ textAlign: "center", color: '#000' }}> {showForm ? "Esconder Formulário" : "Mostrar Formulário"}</Text>
            </TouchableOpacity>

            <Text
                style={{ marginTop: 14, margin: 8, fontSize: 20, color: "#000" }}>
                Usuários:
            </Text>

            <FlatList
                data={users}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <UsersList data={item} handleEdit={(item) => editUser(item)} />
                )}
            />

            <TouchableOpacity onPress={handleLogout} style={styles.buttonLogout}>
                <Text style={{ color: '#fff'}}>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    button: {
        backgroundColor: "#000",
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 4

    },
    buttonText: {
        padding: 8,
        color: "#FFF",
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        marginLeft: 8,
        marginRight: 8,
    },
    label: {
        color: '#000',
        fontSize: 16,
        marginBottom: 8,
        marginLeft: 8
    },
    list: {
        margin: 8,
    },
    buttonLogout: {
        backgroundColor: 'red',
        alignSelf: "flex-start",
        margin: 14,
        padding: 8, 
        borderRadius: 4
    }
})