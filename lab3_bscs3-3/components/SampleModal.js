import React from 'react';
import {TouchableOpacity, Modal, Text, StyleSheet, Image, ScrollView, View,} from 'react-native';

const SampleModal = props => {
  
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style= {styles.containers}>
            <Image style= {styles.picture} source={{uri: 'https://www.igta5.com/images/gta-v-five-logo-v-only.png'}}/>
            <ScrollView>
            <Text style= {styles.text}>    
              Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.{'\n\n'}

The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.{'\n\n'}


The game's development began soon after Grand Theft Auto IV's release and was shared between many of Rockstar's studios worldwide. The development team drew influence from many of their previous projects such as Red Dead Redemption and Max Payne 3 and designed the game around three lead protagonists to innovate on the core structure of its predecessors. Much of the development work constituted the open world's creation, and several team members conducted field research around California to capture footage for the design team. The game's soundtrack features an original score composed by a team of producers who collaborated over several years. It was released in September 2013 for the PlayStation 3 and Xbox 360, in November 2014 for the PlayStation 4 and Xbox One, and April 2015 for Microsoft Windows. PlayStation 5 and Xbox Series X/S versions are scheduled to release in late 2021.{'\n\n'}


Extensively marketed and widely anticipated, the game broke industry sales records and became the fastest-selling entertainment product in history, earning $800 million in its first day and $1 billion in its first three days. It received widespread critical acclaim, with praise directed at its multiple protagonist design, open world, presentation and gameplay. However, it caused controversies related to its depiction of violence and women. Considered one of seventh and eighth generation console gaming's most significant titles and among the best video games ever made, it won year-end accolades including Game of the Year awards from several gaming publications. It is the second best-selling video game of all time with over 140 million copies shipped and one of the most financially successful entertainment products of all time, with about $6 billion in worldwide revenue.{'\n\n'}


<Text style= {styles.textbold}>Gameplay{'\n\n'}</Text>

Grand Theft Auto V is an action-adventure game[2] played from either a third-person[3] or first-person perspective.[4][b] Players complete missions—linear scenarios with set objectives—to progress through the story.[5] Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series.[6][c] It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.[8]{'\n\n'}


Players use melee attacks, firearms and explosives to fight enemies,[d] and may run, jump, swim or use vehicles to navigate the world.[e] To accommodate the map's size, the game introduces vehicle types absent in its predecessor Grand Theft Auto IV, such as fixed-wing aircraft.[11] In combat, auto-aim and a cover system may be used as assistance against enemies.[12] Should players take damage, their health meter will gradually regenerate to its halfway point.[f] Players respawn at hospitals when their health depletes.[10] If players commit crimes, law enforcement agencies may respond as indicated by a "wanted" meter in the head-up display (HUD).[13] Stars displayed on the meter indicate the current wanted level (for example, at the maximum five-star level, police helicopters and SWAT teams swarm to lethally dispatch players).[14][g] Law enforcement officers will search for players who leave the wanted vicinity. The meter enters a cool-down mode and eventually recedes when players are hidden from the officers' line of sight that displays on the mini-map for a period of time.[16][h]{'\n\n'}


The single-player mode lets players control three characters: Michael De Santa, Trevor Philips and Franklin Clinton—criminals whose stories interconnect as they complete missions. Some missions are completed with only one character and others feature two or three.[18] Outside the missions, players may switch between characters at will by a directional compass on the HUD, although this feature becomes restricted at various points throughout the story. The game may switch characters automatically during missions to complete specific objectives. A character's compass avatar will flash red if he is in danger and needs help, and flash white if he has a strategic advantage.[19] Though players complete missions as any of the three protagonists, the more difficult heist missions require aid from AI-controlled accomplices with unique skill sets like computer hacking and driving. If an accomplice survives a successful heist, they take a cut from the cash reward[20] and may be available for later missions with improvements to their unique skills.[21] Some heists afford multiple strategies; in a holdup mission, players may either stealthily subdue civilians with an incapacitating agent or conspicuously storm the venue with guns drawn.[22]{'\n\n'}


Each character has a set of eight skills that represent their ability in specific areas such as shooting and driving. Though skills improve through play, each character has a skill with expertise by default (e.g. Trevor's flying skill).[23] The eighth "special" skill determines the effectiveness in performing an ability that is unique to each respective character. Michael enters bullet time in combat, Franklin slows down time while driving, and Trevor deals twice as much damage to enemies while taking half as much in combat.[24] A meter on each character's HUD depletes when an ability is being used and regenerates when players perform skilful actions (for example, drifting in vehicles as Franklin or performing headshots as Michael).[25]{'\n\n'}


While free-roaming the game world, players may engage in context-specific activities such as scuba diving and BASE jumping. Each character has a smartphone for contacting friends, starting activities and accessing an in-game Internet.[26] The Internet lets players trade in stocks via a stock market.[27] Players may purchase properties such as garages and businesses, upgrade the weapons and vehicles in each character's arsenal. Players may also visit places such as cinemas and strip clubs. Players can also customise their appearance by purchasing outfits, haircuts and tattoos.[28]{'\n\n'}


<Text style= {styles.textbold}> Plot{'\n\n'} </Text>

In 2004,[i] Michael Townley, Trevor Philips, and Brad Snider partake in a botched robbery in Ludendorff, North Yankton, resulting in all three being presumed dead. Nine years later, Michael is living with his family in the city of Los Santos, under the alias Michael De Santa, after making a secret agreement with Federal Investigation Bureau (FIB)[j] agent Dave Norton to stay hidden. Across town, gangbanger Franklin Clinton is working for a corrupt Armenian car salesman and meets Michael while attempting to fraudulently repossess his son's car; the two later become friends. When Michael finds his wife sleeping with her tennis coach, he and Franklin chase the coach to a mansion, which Michael partially destroys in anger. The owner of the mansion, Mexican drug lord Martin Madrazo, demands compensation to avoid further violence. Michael returns to a life of crime to obtain the money, enlisting Franklin as an accomplice. With the help of Michael's old friend Lester Crest, a disabled hacker, they rob a jewellery store to pay off the debt. Meanwhile, Trevor, who now lives in a trailer park on the outskirts of Los Santos, hears of the heist and realises that it was Michael's work; Trevor had believed that Michael was killed in their botched robbery nine years ago. Trevor tracks Michael down and reunites with him, forcing a reluctant Michael to accept him back into his life.{'\n\n'}


As time goes on, the personal lives of the protagonists begin to spiral out of control. Michael's increasingly disreputable behaviour prompts his family to leave him. When he becomes a movie producer at the film studio Richards Majestic, Michael comes into conflict with Devin Weston, a self-made billionaire venture capitalist and corporate raider, who vows revenge after Michael thwarts his attempts to shut down the studio and inadvertently kills his assistant. Meanwhile, Franklin must rescue his friend Lamar Davis from rival gangster and former friend Harold "Stretch" Joseph, who repeatedly attempts to kill them to prove himself to his new brethren. At the same time, Trevor's reckless efforts to consolidate his control over various black markets in Blaine County see him waging war against The Lost outlaw motorcycle club, several Latin American street gangs, rival meth dealers, private security firm Merryweather Security, and triad kingpin Wei Cheng.{'\n\n'}


After breaking his agreement with Dave by committing heists again, Michael finds himself coerced by him and his superior agent, Steve Haines, into performing a series of operations alongside Franklin and Trevor to undermine the International Affairs Agency (IAA).[k] Under Steve's direction and with Lester's help, they attack an armoured convoy carrying funds intended for the IAA and steal an experimental chemical weapon from an IAA-controlled lab. As Steve comes under increasing scrutiny, he forces Michael and Franklin to erase any evidence being used against him from the FIB servers. Michael takes the opportunity to wipe the data on his activities, destroying Steve's leverage over him.{'\n\n'}


Eventually, Michael, Trevor, Franklin, and Lester start planning their most significant heist ever: raiding the Union Depository's gold bullion reserve. By this time, Michael reconciles with his family. However, Trevor discovers that Brad was not imprisoned as led to believe, but killed by Dave during the Ludendorff heist and buried in the grave marked for Michael. Trevor's feelings of betrayal cause friction within the group and threaten to undermine their Union Depository plans. Meanwhile, Steve betrays Michael and Dave, and they become caught in a Mexican standoff between the FIB, IAA, and Merryweather. Trevor, feeling that he is the only one who has the right to kill Michael, comes to their aid. Despite not forgiving Michael, Trevor agrees to perform the Union Depository heist and part ways with him afterwards.{'\n\n'}


The heist is successful, but Franklin is then approached separately by Steve and Dave, who contend that Trevor is a liability, and Devin, who wants retribution for Michael's betrayal. Franklin has three choices: kill Trevor, kill Michael, or attempt to save both in a suicide mission. Should Franklin choose to kill either Michael or Trevor, he ceases contact with the man he spares and returns to his old life.[31][32] Otherwise, the trio withstands an onslaught from the FIB and Merryweather before going on to kill Cheng, Stretch, Steve, and Devin. Michael and Trevor reconcile, and the three protagonists cease working together but remain friends.[33] {'\n\n'}


<Text style= {styles.textbold}> Development{'\n\n'} </Text>


Rockstar North began to develop Grand Theft Auto V in 2008, following Grand Theft Auto IV's release.[34] Development was conducted by a team of more than 1,000 people, including Rockstar North's core team and staff from parent company Rockstar Games' studios around the world.[35] The proprietary Rockstar Advanced Game Engine (RAGE) was overhauled for the game to improve its draw distance rendering capabilities.[36] The Euphoria and Bullet software handle additional animation and rendering tasks.[37] Having become familiar with the PlayStation 3 and Xbox 360 hardware over time, Rockstar found they were able to push the consoles' graphical capabilities further than in previous games.[38] Analyst estimations place the game's combined development and marketing budget at more than GB£170 million (US$265 million), which would make it the most expensive game ever made at that time.[39][l]{'\n\n'}


The open world was modelled on Southern California and Los Angeles,[41] and its design and in-game render constituted much of the game's early work.[42] Key members of the game world production team took field research trips throughout the region and documented their research with photo and video footage.[38] Google Maps projections of Los Angeles were used by the team to help design Los Santos' road networks.[43][44] To reflect and reproduce Los Angeles' demographic spread, the developers studied census data and watched documentaries about the city.[36] The team considered creating the open world the most technically demanding aspect of the game's production.[34]{'\n\n'}


A fundamental design goal from the outset was to innovate on the series core structure by giving players control of three lead protagonists instead of one.[42] The idea was first raised during Grand Theft Auto: San Andreas' development, but contemporaneous hardware restrictions made it infeasible.[45] Having developed two Grand Theft Auto IV episodic expansion packs featuring new protagonists in 2009, the team wanted to base Grand Theft Auto V around three simultaneously controlled protagonists.[11] The team viewed it as a spiritual successor to many of their previous games (such as Grand Theft Auto IV, Red Dead Redemption and Max Payne 3), and designed it to improve upon their gameplay mechanics.[19][46] They sought to improve the action gameplay by refining the shooting mechanics and cover system[47] and reworked the driving mechanics to correct Grand Theft Auto IV's awkward vehicle controls.[48]{'\n\n'}


After an audition process, Ned Luke, Shawn Fonteno and Steven Ogg were selected to portray Michael, Franklin and Trevor, respectively.[49] Their performances were mostly recorded using motion capture technology,[50] but dialogue for scenes with characters seated in vehicles was recorded in studios instead.[51] The game is the first in its series to feature an original score, composed by a team of producers collaborating over several years.[52] Licensed music provided by an in-game radio is also used.[53] The team licensed more than 241 tracks shared between fifteen radio stations, with an additional two stations providing talk radio.[m] Some of the tracks were written specifically for the game, such as rapper and producer Flying Lotus' original work composed for the FlyLo FM radio station he hosts.[55]{'\n\n'}


The game was first announced by Rockstar Games on 25 October 2011.[56] They released its debut trailer one week later,[57] with an official press release acknowledging its setting.[58] Journalists noted that the announcement ignited widespread anticipation within the gaming industry, which they owed to the cultural significance of the series.[59][60][61] The game missed its original projected Q2 2013 release date, pushed back to 17 September to allow for further polishing.[62] To spur pre-order game sales, Rockstar collaborated with several retail outlets to make a special edition with extra in-game features.[63] They ran a viral marketing strategy with a website for a fictional religious cult, "The Epsilon Program", that offered users the chance to feature in the game as members of the cult.[64]{'\n\n'}


A re-release of the game was announced for Microsoft Windows (PC), PlayStation 4 and Xbox One at E3 2014. This enhanced version features an increased draw distance, finer texture details, denser traffic, upgraded weather effects, and new wildlife and vegetation.[65] It includes a new on-foot first-person view option, which required the development team to overhaul the animation system to accommodate first-person gameplay.[4] The PlayStation 4 and Xbox One versions were released on 18 November 2014.[66] The PC version, initially scheduled for simultaneous release with the console versions,[65] was delayed until 14 April 2015.[67] According to Rockstar, it required extra development time for "polish".[68] The PC version is capable of 60 frames per second gameplay at 4K resolution, and the Rockstar Editor lets players capture and edit gameplay videos.[69] Plans to develop single-player downloadable content were later scrapped as the team focused resources on Grand Theft Auto Online and Red Dead Redemption 2.[70] PlayStation 5 and Xbox Series X/S versions were announced in June 2020 for a release in the second half of 2021. It will feature additional technical enhancements and performance upgrades.[71]{'\n'}

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
    width: 100,
    height: 100,
  
  },
  textbold:{
    fontWeight: 'bold',
  },
  buttonstyle:{
       backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
   buttonText1: {
    fontSize: 20,
    color: 'black',
  },
  });

export default SampleModal;