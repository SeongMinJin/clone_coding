import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import LikeCard from '../components/LikeCard';
import Loading from '../components/Loading';
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';

export default function LikePage({ navigation }) {
  let user_idx = Constants.installationId;
  const [ready, setReady] = useState(true);
  const [tip, setTip] = useState([])

  useEffect(() => {
    navigation.setOptions({
      title: '꿀팁 찜'
    })
    setTimeout(() => {
      firebase_db.ref('/like/' + user_idx).once('value').then((snapshot) => {
        if (snapshot.exists()) {
          let tip = snapshot.val();
          let tip_list = Object.values(tip)
          setTip(tip_list)
          setReady(false)
        } else {
          setReady(true)
          setTip([])
        }
      });
    }, 100)
  }, []);

  const reload = () => {
    firebase_db.ref('/like/' + user_idx).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        let tip = snapshot.val();
        let tip_list = Object.values(tip)
        setTip(tip_list)
      } else {
        setReady(true)
        setTip([])
      }
    })
  }

  return ready ? <Loading /> : (
    <ScrollView>
      <View style={styles.container}>
        {
          tip.map((content, i) => {
            return (<LikeCard reload={reload} content={content} key={i} navigation={navigation} user_idx={user_idx}/>)
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});