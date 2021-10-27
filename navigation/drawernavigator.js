import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stacknavigator";
import Timetable from "../screens/timetable";
import HolidayList from "../screens/holidaylist";
import Profile from "../screens/profile";
import Logout from "../screens/logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Timetable" component={Timetable} />
            <Drawer.Screen name="HolidayList" component={HolidayList} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;