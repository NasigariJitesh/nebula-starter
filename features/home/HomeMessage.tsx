import { useColorScheme } from 'nativewind';
import { Button, Text, View } from 'nebula';
import { HelloWave } from './HelloWave';

export function HomePage() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center p-3">
      <View className="bg-popover max-h-md border-primary w-full max-w-lg gap-y-4 rounded-md border p-4">
        <Text className="text-center text-3xl font-medium">
          Welcome <HelloWave />
        </Text>
        <Text className="text-center text-2xl font-light">Expo + Nebula</Text>
        <Button variant="default" className="w-fit self-center p-4" onPress={toggleColorScheme}>
          <Text>Switch to {colorScheme === 'dark' ? 'Light' : 'Dark'} Theme</Text>
        </Button>
      </View>
    </View>
  );
}
