import { Link, Stack } from 'expo-router';
import { Text, View } from 'nebula';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="items-center justify-center flex-1 p-5">
        <Text>This screen doesn't exist.</Text>
        <Link href="/" className="underline text-primary">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
