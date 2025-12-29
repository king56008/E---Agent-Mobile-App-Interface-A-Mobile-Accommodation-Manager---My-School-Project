import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const Page = ({ onAddProperty }) => {
  const [propertyData, setPropertyData] = useState({
    // title: "",
    // Prop: "",
    // Price: "",
    // description: "",
    //LodgeName: "",
    //Num: "",
    //AccNum: "",
  });

  const handleInputChange = (field, value) => {
    setPropertyData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddProperty = () => {
    onAddProperty(propertyData);
    // Reset the form after adding the property
    setPropertyData({
      title: "",
      Prop: "",
      Price: "",
      description: "",
      LodgeName: "",
      Num: "",
      AccNum: "",
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={propertyData.title}
        onChangeText={(text) => handleInputChange("title", text)}
      />
      <TextInput
        placeholder="Property Type"
        value={propertyData.Prop}
        onChangeText={(text) => handleInputChange("Prop", text)}
      />
      <TextInput
        placeholder="Price"
        value={propertyData.Price}
        onChangeText={(text) => handleInputChange("Price", text)}
      />
      {/* Repeat the TextInput components for other fields */}
      <Button title="Add Property" onPress={handleAddProperty} />
    </View>
  );
};

export default Page;
