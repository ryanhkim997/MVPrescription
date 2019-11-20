import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, Modal, TouchableHighlight, Picker, ScrollView } from 'react-native';

export default class AlertDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      selectedHour: 1,
      selectedMedDay: 1,
      selectedTime: 12,
      selectedDay: 5,
      medDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      time: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      days: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
      switch1Value: false,
      switch2Value: false
    }
  }

  toggleSwitch1 = (value) => {
    this.setState({switch1Value: !this.state.switch1Value})
  }

  toggleSwitch2 = (value) => {
    this.setState({switch2Value: !this.state.switch2Value})
  }

  render(){
    let getHours = this.state.hours.map((h, i) => {
      return <Picker.Item key={i} value={h} label={h} />
    });

    let getDays = this.state.days.map((d, i) => {
      return <Picker.Item key={i} value={d} label={d} />
    });

    let getMedDays = this.state.medDays.map((m, i) => {
      return <Picker.Item key={i} value={m} label={m} />
    });

    let getTime = this.state.time.map((t, i) => {
      return <Picker.Item key={i} value={t} label={t} />
    });

    return(
      <View>
        {this.props.data.map((med, i) => (
          <View key={i}>
            <View style={{marginBottom: 15}}>
            <TouchableOpacity key={i} style={{flex:1, flexDirection: 'row', padding: 5}}>
              <Image style={{width: 100, height: 100}} source={{uri:med.img}}/>
              <View style={{width: 100, height: 100, flex:1, flexDirection: 'column'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', textDecorationLine:'underline'}}>
              {med.medName}: {med.strength}
              </Text>
              <Text style={{fontSize:16}}>{med.direction}</Text>
              </View>
            </TouchableOpacity>

            <TouchableHighlight onPress={() => this.setState({modalVisible: true})}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Set Alerts</Text>
            </TouchableHighlight>
            </View>

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>             
              
              <View>
                <TouchableHighlight style={{alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10, marginTop: 30}} 
                onPress={() => this.setState({modalVisible: !this.state.modalVisible})} > 
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>Close</Text>
                </TouchableHighlight>
              </View>

              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <Text style={{marginBottom: 0, fontSize: 35}}>Set Daily Med Reminder</Text>
                {/* --days-- */}
                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{fontSize: 25}}>Every</Text>
                  <Picker selectedValue={this.state.selectedMedDay} onValueChange={(md) => this.setState({selectedMedDay: md})}>
                    {getMedDays}
                  </Picker>
                  <Text style={{fontSize: 25}}>Day(s)</Text>
                </View >
                {/* --hours-- */}
                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{marginTop: "10%", fontSize: 25}}>Every</Text>
                  <Picker selectedValue={this.state.selectedHour} onValueChange={(hr) => this.setState({selectedHour: hr})}>
                    {getHours}
                  </Picker>
                  <Text style={{fontSize: 25}}>Hour(s)</Text>
                </View>
                {/* --Time-- */}
                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{marginTop: "10%", fontSize: 25}}>Start At</Text>
                  <Picker selectedValue={this.state.selectedTime} onValueChange={(t) => this.setState({selectedTime: t})}>
                    {getTime}
                  </Picker>
                  <Text style={{fontSize: 25}}>PM</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 300}}>
                <Text style={{marginHorizontal: 10}}>ON</Text>
                <Switch onValueChange={this.toggleSwitch1} value={this.state.switch1Value}/>
                <Text style={{marginHorizontal: 10}}>OFF</Text>
              </View>


              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <Text style={{marginBottom: 0, fontSize: 35}}>Set Refill Med Reminder</Text>

                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{marginTop: "10%", fontSize: 25}}>Every</Text>
                  <Picker selectedValue={this.state.selectedDay} onValueChange={(day) => this.setState({selectedDay: day})}>
                    {getDays}
                  </Picker>
                  <Text style={{fontSize: 25}}>Day(s)</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 300}}>
                <Text style={{marginHorizontal: 10}}>ON</Text>
                <Switch onValueChange={this.toggleSwitch2} value={this.state.switch2Value}/>
                <Text style={{marginHorizontal: 10}}>OFF</Text>
              </View>
              
               
            </Modal> 
          </View>
        ))}
      </View>
    );
  }
}



