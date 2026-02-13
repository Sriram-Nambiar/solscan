import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function settings() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text>settings</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})