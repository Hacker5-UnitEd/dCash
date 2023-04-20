import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import DebtTrackerCard from "../../components/DebtTrackerCard";

const DebtButton = ({ debtObj, type }) => {
  return (
    <TouchableOpacity className="bg-[#313131] p-5 rounded-2xl flex-grow mt-4 ml-2 aspect-square">
      <Image></Image>
      <Text
        className="text-white text-xs"
        style={{ fontFamily: "Inter_900Black" }}
      >
        {debtObj.debts.length} New
      </Text>
      <Text
        className="text-white text-s"
        style={{ fontFamily: "Inter_900Black" }}
      >
        {debtObj.person.name}
      </Text>
    </TouchableOpacity>
  );
};

const DebtTrackerTab = ({ setSelectedTab }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [debts, setDebts] = useState([
    {
      id: 1,
      person: {
        name: "Person 1",
        image: null,
      },
      debts: [80, 80, 80, 80, 80],
    },
    {
      id: 2,
      person: {
        name: "Person 2",
        image: null,
      },
      debts: [250, 250],
    },
    {
      id: 3,
      person: {
        name: "Person 3",
        image: null,
      },
      debts: [30, 30, 30, 30, 30, 30, 30, 30, 60],
    },
    {
      id: 4,
      person: {
        name: "Person 4",
        image: null,
      },
      debts: [260, 260, 260, 260, 260],
    },
  ]);

  return (
    <View className="mt-6">
      <View className="flex flex-row mb-8">
        <TouchableOpacity
          className="flex bg-[#1e90ff] text-white py-2 px-6 rounded-full"
          disabled={true}
        >
          <Text
            className="text-white mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Debt Tracker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex bg-[#1a1a1a] py-2 px-6 rounded-full mr-3"
          onPress={() => {
            setSelectedTab("Finance");
          }}
        >
          <Text
            className="text-gray-500 mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Finance
          </Text>
        </TouchableOpacity>
      </View>
      <DebtTrackerCard dep={76} />
      <Text
        className="text-white text-3xl mt-8"
        style={{ fontFamily: "Inter_900Black" }}
      >
        Ledger
      </Text>

      <View className="flex flex-row mt-2 mb-10">
        <Text
          className="text-white text-xl mt-8"
          style={{ fontFamily: "Inter_900Black" }}
        >
          todo
        </Text>
      </View>
    </View>
  );
};

export default DebtTrackerTab;
