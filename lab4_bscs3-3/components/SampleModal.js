import React from 'react';
import {TouchableOpacity, Modal, Text, StyleSheet, Image, ScrollView, View,} from 'react-native';

const SampleModal = props => {
  
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style= {styles.containers}>
            <Image style= {styles.picture} source={{uri: 'https://seeklogo.com/images/D/dota-2-logo-7804D430C9-seeklogo.com.png'}}/>
            <ScrollView>
            <Text style= {styles.text}>    
            <Text style= {styles.textbold}>A list of Dota 2 Heroes names with their anagrams.{'\n\n'}</Text>

Abaddon - Adan Bod{'\n\n'}

Alchemist - Alec Smith{'\n\n'}

Ancient Apparition - Anna Precipitation{'\n\n'}

Anti-Mage - Agmatine{'\n\n'}

Arc Warden - Andra Crew{'\n\n'}

Axe - A Ex{'\n\n'}

Bane - Bean{'\n\n'}

Batrider - Arte Bird{'\n\n'}

Beastmaster - Abram Testes{'\n\n'}

Bloodseeker - Brooke Leeds{'\n\n'}

Bounty Hunter - Huberto Tunny{'\n\n'}

Brewmaster - Amer Webster{'\n\n'}

Bristleback - Bab Stickler{'\n\n'}

Broodmother - Bedroom Thor{'\n\n'}

Centaur Warrunner - Antwan Curer Rerun{'\n\n'}

Chaos Knight - Choking Shat{'\n\n'}

Chen - He nc{'\n\n'}

Clinkz - Lick zn{'\n\n'}

Clockwerk - Lock Wreck{'\n\n'}

Crystal Maiden - Alderamin Cyst{'\n\n'}

Dark Seer - Arse Derk{'\n\n'}

Dark Willow - Willard Wok{'\n\n'}

Dazzle - Z Lazed{'\n\n'}

Death Prophet - Hertha Topped{'\n\n'}

Disruptor - Dior Spurt{'\n\n'}

Doom - Odom{'\n\n'}

Dragon Knight - Darth Gonking{'\n\n'}

Drow Ranger - Darn Grower{'\n\n'}

Earth Spirit - The Airstrip{'\n\n'}

Earthshaker - Aether Shark{'\n\n'}

Elder Titan - Adel Tinter{'\n\n'}

Ember Spirit - Bries Permit{'\n\n'}

Enchantress - Ass Entrench{'\n\n'}

Enigma - Gamine{'\n\n'}

Faceless Void - Cafe Dissolve{'\n\n'}

Grimstroke - Gerik Storm{'\n\n'}

Gyrocopter - Gey Proctor{'\n\n'}

Huskar - Rash UK{'\n\n'}

Invoker - En Kirov{'\n\n'}

Io - Oi{'\n\n'}

Jakiro - Ak Jori{'\n\n'}

Juggernaut - Juan Tugger{'\n\n'}

Keeper of The Light - Fight Hotelkeeper{'\n\n'}

Kunkka - A KKK UN{'\n\n'}

Legion Commander - Aligned Commoner{'\n\n'}

Leshrac - Charles{'\n\n'}

Lich - Chil{'\n\n'}

Lifestealer - Alfie Lester{'\n\n'}

Lina - Nail{'\n\n'}

Lion - Loin{'\n\n'}

Lone Druid - Dino Lured{'\n\n'}

Luna - Ulna{'\n\n'}

Lycan - La NYC{'\n\n'}

Magnus - Anus GM{'\n\n'}

Mars - RAMs{'\n\n'}

Medusa - Amused{'\n\n'}

Meepo - Mo Pee{'\n\n'}

Mirana - Armani{'\n\n'}

Monkey King - Kinky Gnome{'\n\n'}

Morphling - Holing RPM{'\n\n'}

Naga Siren - Aaren Gins{'\n\n'}

Nature's Prophet - Ethan Supporter{'\n\n'}

Necrophos - Ches Porno{'\n\n'}

Night Stalker - Alert Knights{'\n\n'}

Nyx Assassin - Ann Sax Sissy{'\n\n'}

Ogre Magi - Aggi More{'\n\n'}

Omniknight - Mo Thinking{'\n\n'}

Oracle - Carole{'\n\n'}

Outworld Devourer - Doro Dower Vulture{'\n\n'}

Pangolier - Alpo Reign{'\n\n'}

Phantom Assassin - Shops Tasmanians{'\n\n'}

Phantom Lancer - Monarch Planet{'\n\n'}

Phoenix - Hip Oxen{'\n\n'}

Puck - K Cup{'\n\n'}

Pudge - De Pug{'\n\n'}

Pugna - Gan Pu{'\n\n'}

Queen of Pain - Anne of Pique{'\n\n'}

Razor - Arroz{'\n\n'}

Riki - I irk{'\n\n'}

Rubick - Crib UK{'\n\n'}

Sand King - Dang Sink{'\n\n'}

Shadow Demon - Damon Showed{'\n\n'}

Shadow Fiend - Fonda Wished{'\n\n'}

Shadow Shaman - Mohandas Wash{'\n\n'}

Silencer - Licenser{'\n\n'}

Skywrath Mage - Gawky Hamster{'\n\n'}

Slardar - RR Salad{'\n\n'}

Slark - Larks{'\n\n'}

Sniper - Ripens{'\n\n'}

Spectre - Sceptre{'\n\n'}

Spirit Breaker - Sparkier Tribe{'\n\n'}

Storm Spirit - Mitts Priors{'\n\n'}

Sven - Ens V{'\n\n'}

Techies - Cites eh{'\n\n'}

Templar Assassin - Alsatians Sperms{'\n\n'}

Terrorblade - Adler Robert{'\n\n'}

Tidehunter - Hide Nutter{'\n\n'}

Timbersaw - Bite Swarm{'\n\n'}

Tinker - Er Knit{'\n\n'}

Tiny - It NY{'\n\n'}

Treant Protector - Potent Retractor{'\n\n'}

Troll Warlord - Lard Roll Wort{'\n\n'}

Tusk - St UK{'\n\n'}

Underlord - Lorn Udder{'\n\n'}

Undying - Gun Indy{'\n\n'}

Ursa - Sura{'\n\n'}

Vengeful Spirit - Sever Uplifting{'\n\n'}

Venomancer - Cavern Omen{'\n\n'}

Viper - Pie RV{'\n\n'}

Visage - I Vegas{'\n\n'}

Warlock - Crawl {'\n\n'}

Weaver - Eve War{'\n\n'}

Windrager - Andrew Ring{'\n\n'}

Winter Wyvern - Ever Wynn Writ{'\n\n'}

Witch Doctor - Chord Co Twit{'\n\n'}

Wraith King - Hawk Tiring{'\n\n'}

Zeus - Suez{'\n\n'}

            </Text>
            </ScrollView>
            <TouchableOpacity onPress={props.onClose} style= {styles.buttonstyle}>
        <Text style={styles.buttonText1}>Close</Text>
      </TouchableOpacity>
            </View>
        </Modal>
        


    );
};
const styles = StyleSheet.create({
  containers: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'

  }, 
  text: {
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    color: 'white',

  }, 
  picture:{
    width: 90,
    height: 90,
    marginTop: 5,
  },
  textbold:{
    fontWeight: 'bold',
  },
  buttonstyle:{
       backgroundColor: "#B22222",
    padding: 5,
    borderRadius: 5,
  },
   buttonText1: {
    fontSize: 15,
    color: 'black',
  },
  });

export default SampleModal;