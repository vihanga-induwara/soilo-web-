import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const AuthScreen = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <View className="flex-1 flex-row bg-gray-100">
            {/* Registration Section */}
            {!isLogin && (
                <View className="flex-1 justify-center items-center p-4 bg-white">
                    <Text className="text-2xl font-bold">REGISTRATION</Text>
                    <Image source={require('./assets/avatar.png')} className="w-20 h-20 mt-4" />
                    <TextInput className="w-3/4 p-2 mt-2 border rounded" placeholder="Full Name" />
                    <TextInput className="w-3/4 p-2 mt-2 border rounded" placeholder="Phone number" keyboardType="phone-pad" />
                    <TextInput className="w-3/4 p-2 mt-2 border rounded" placeholder="Password" secureTextEntry />
                    <TextInput className="w-3/4 p-2 mt-2 border rounded" placeholder="Re-enter password" secureTextEntry />
                    <TouchableOpacity className="bg-black text-white px-4 py-2 mt-4 rounded">
                        <Text className="text-white">Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsLogin(true)}>
                        <Text className="mt-2 text-blue-600">Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Login Section */}
            {isLogin && (
                <View className="flex-1 justify-center items-center p-4 bg-gray-200">
                    <Text className="text-2xl font-bold">LOGIN</Text>
                    <Image source={require('./assets/avatar.png')} className="w-20 h-20 mt-4" />
                    <TextInput className="w-3/4 p-2 mt-2 border rounded" placeholder="Phone number" keyboardType="phone-pad" />
                    <TextInput className="w-3/4 p-2 mt-2 border rounded" placeholder="Password" secureTextEntry />
                    <TouchableOpacity className="bg-black text-white px-4 py-2 mt-4 rounded">
                        <Text className="text-white">Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsLogin(false)}>
                        <Text className="mt-2 text-blue-600">Don't have an account? Sign up</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default AuthScreen;
