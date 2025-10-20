import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, cerrarSesion }) {
    return (
        <View style={styles.container}>
             <Button title="Cerrar Sesión" onPress={cerrarSesion} />
              <View style={styles.spacer} />
            <Button
                title="Ir a Productos"
                onPress={() => navigation.navigate('Productos')}
            />
            <View style={styles.spacer} />
            <Button
                title="Ir a Clientes"
                onPress={() => navigation.navigate('Clientes')}
            />
            <View style={styles.spacer} />
            <Button
                title="Ir a Promedio" 
                onPress={() => navigation.navigate('Promedio')}
            />
            <View style={styles.spacer} />
            <Button
                title="Ir a Empleado"
                onPress={() => navigation.navigate('Empleados')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacer: {
        height: 15,
    },
});