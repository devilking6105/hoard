import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import MenuHeader from 'components/MenuHeader';
import Link from 'components/Link';
import Scene from 'components/Scene';

export default function GetHelp() {
  return (
    <Scene preload={false}>
      <View style={styles.container}>
        <MenuHeader
          title="Get Help"
          rightAction="menu"
        />
        <View style={styles.content}>
          <Link
            external
            title="Contact Us"
            to="mailto:support@hoardinvest.com"
          />
          <Link
            external
            title="My Support"
            to="https://support.hoardinvest.com"
          />
        </View>
      </View>
    </Scene>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 20
  },
});
