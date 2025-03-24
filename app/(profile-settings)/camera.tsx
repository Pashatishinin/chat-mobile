import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Camera } from "expo-camera";

const CameraScreen = () => {
  const cameraRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={cameraRef}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text style={{ color: "white" }}>Scan QR Code</Text>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
