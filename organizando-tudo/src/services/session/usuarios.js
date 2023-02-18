import AsyncStorage from "@react-native-async-storage/async-storage";

export async function CreateSession(apelido, email, password, token, manter) {
    await AsyncStorage.setItem('apelido', apelido);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('senha', password);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('manter', manter);
};

export async function GetSession() {
    const sessionsKeys = await AsyncStorage.getAllKeys();
    if (sessionsKeys !== null) {
        const sessions = await AsyncStorage.multiGet(sessionsKeys);
        return sessions;
    }
};

export async function DeleteSessions() {
    const sessionsKeys = await AsyncStorage.getAllKeys();
    if (sessionsKeys !== null) {
        await AsyncStorage.multiRemove(sessionsKeys);
    }
};
