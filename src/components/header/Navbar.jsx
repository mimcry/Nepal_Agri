import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import { Search } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons"; // Ionicons for the cross icon
import CustomButton from "@/components/custom-button";

const BookingDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search visibility
  const [isAllocated, setIsAllocated] = useState(false);

  const handleButtonPress = () => {
    setIsAllocated(!isAllocated);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search field visibility
  };

  const clearSearch = () => {
    setSearchQuery(""); // Clear the search query
  };

  return (
    <SafeAreaView className="p-4">
      <View className="flex-row">
        <Text className="text-lg font-bold mt-1">Doctor List</Text>
        <View className="ml-auto">
          <TouchableOpacity
            onPress={toggleSearch} // Toggle search field visibility on click
            className="flex-row items-center bg-white rounded-3xl mb-4 p-2"
          >
            <Search color="#9CA3AF" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Conditionally render the search field */}
      {isSearchVisible && (
        <View className="flex-row items-center bg-white p-2 rounded-lg mb-2">
          <TextInput
            placeholder="Search Doctor"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1"
          />

          {/* Conditionally render the clear (cross) button */}
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch}>
              <Ionicons name="close-circle" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      )}

      <View className="rounded-lg shadow-xl bg-white p-4 shadow-sky-400 mt-1">
        <View>
          <Text className="font-bold text-base">Dr. Salon Gautam</Text>
          <Text className="">salongautam4@gmail.com</Text>
        </View>
        <View className="ml-auto">
          <CustomButton
            title={isAllocated ? "Deallocate" : "Allocate"}
            onPress={handleButtonPress}
            variant={isAllocated ? "secondary" : "primary"}
            size="medium"
          />
        </View>
      </View>

      <View className="rounded-lg shadow-xl bg-white p-4 shadow-sky-400 mt-1">
        <View>
          <Text className="font-bold text-base">Dr. Salon Gautam</Text>
          <Text className="">salongautam4@gmail.com</Text>
        </View>
        <View className="ml-auto">
          <CustomButton
            title={isAllocated ? "Deallocate" : "Allocate"}
            onPress={handleButtonPress}
            variant={isAllocated ? "secondary" : "primary"}
            size="medium"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingDetails;
