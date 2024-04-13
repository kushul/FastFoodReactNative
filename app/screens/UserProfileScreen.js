import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>User Profile Screen</Text>
            {/* Add your user profile screen components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default UserProfileScreen;
