import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  TouchableWithoutFeedback
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileAdmissionForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [age, setAge] = useState('');
  const [campus, setCampus] = useState('');
  const [image, setImage] = useState(null);
  const [checkedItems, setCheckedItems] = useState({
    anger: false,
    depression: false,
    selfEsteem: false,
    eatingDisorders: false,
    stress: false,
    selfHarm: false,
    sleepDisorders: false,
    anxiety: false,
    panicAttacks: false,
    heartbroken: false,
  });

  const handleSubmit = () => {
    // Handle submission logic here
  }

  const handleSelectPicture = () => {
    const options = {
      title: 'Select Profile Picture',
      takePhotoButtonTitle: 'Take Picture',
      chooseFromLibraryButtonTitle: 'Choose from Gallery',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const Checkbox = ({ label, checked, onChange }) => {
    return (
      <TouchableWithoutFeedback onPress={onChange}>
        <View style={styles.checkboxContainer}>
          <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
            {checked && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const handleCheck = (key) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const RadioButton = ({ value, selectedValue, onSelect }) => {
    const isSelected = value === selectedValue;
  
    return (
      <TouchableOpacity
        style={[styles.radio, isSelected && styles.radioSelected]}
        onPress={() => onSelect(value)}
      >
        {isSelected && <View style={styles.radioDot} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
       <Icon name="arrow-left" size={40} color="black" style={styles.icon2} />
      <TouchableOpacity style={styles.imageContainer} onPress={handleSelectPicture}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image
          source={require('./assets/BLANK.jpg')}
          style={styles.image}
        />
      )}
    </TouchableOpacity>
    <View style={styles.field}>
        <Icon name="user" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.field}>
        <Icon name="user" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Surname"
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioContainer}>
      <RadioButton value="male" selectedValue={gender} onSelect={setGender} />
      <RadioButton value="female" selectedValue={gender} onSelect={setGender} />
      <Text style={styles.radioLabel}>Female</Text>
      <RadioButton value="other" selectedValue={gender} onSelect={setGender} />
      <Text style={styles.radioLabel}>Other</Text>
    </View>

    <View style={styles.field1}>
      <View style={styles.field2}>  
      <Icon name="phone" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        /> 
      <Icon name="birthday-cake" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Age"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => console.log(text)}
        />
      </View>
       
      </View>
     
      <View style={styles.field}>
        <Icon name="university" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Campus"
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <Text style={styles.label}>My Concerns:</Text>
<View style={styles.checkboxContainerr}>
  <View style={styles.checkboxContainerr1}>
      <Checkbox label="Anger" checked={checkedItems.anger} onChange={() => handleCheck('anger')} />
      <Checkbox label="Depression" checked={checkedItems.depression} onChange={() => handleCheck('depression')} />
      <Checkbox label="Self-esteem" checked={checkedItems.selfEsteem} onChange={() => handleCheck('selfEsteem')} />
      <Checkbox label="Eating disorders" checked={checkedItems.eatingDisorders} onChange={() => handleCheck('eatingDisorders')} />
      <Checkbox label="Stress" checked={checkedItems.stress} onChange={() => handleCheck('stress')} />
  </View>
    <View  style={styles.checkboxContainerr2}>
      <Checkbox label="Self-harm" checked={checkedItems.selfHarm} onChange={() => handleCheck('selfHarm')} />
      <Checkbox label="Sleep disorder" checked={checkedItems.sleepDisorders} onChange={() => handleCheck('sleepDisorders')} />
      <Checkbox label="Anxiety" checked={checkedItems.anxiety} onChange={() => handleCheck('anxiety')} />
      <Checkbox label="Panic attacks" checked={checkedItems.panicAttacks} onChange={() => handleCheck('panicAttacks')} />
      <Checkbox label="Heart broken" checked={checkedItems.heartbroken} onChange={() => handleCheck('heartBroken')} />
    </View>
</View>
      
    
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#fff',
paddingHorizontal: 20
},
imageContainer: {
 // backgroundColor: '#6A0DAD',
//borderWidth: 1,
borderColor: '#ccc',
borderRadius: 200,
overflow: 'hidden',
marginBottom: 20
},
image: {
width: 200,
height: 200
},
field: {
  flexDirection: 'row',
  alignItems: 'center',

},
field1: {
  display:'flex',
  flexDirection: 'row',
},
field2: {
  flexDirection: 'row',

  marginHorizontal: 60,
  marginLeft: 20,
  justifyContent: 'space-between',

},
icon: {
  marginRight: 10,
},
icon2:{
  marginTop: 20,
  marginRight: 1200,
},
input: {
  flex: 1,
  height: 40,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  paddingHorizontal: 10,

},
label: {
alignSelf: 'flex-start',
marginBottom: 10
},
radioContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
width: '100%',
//flex: 1,
alignItems: 'center',
ustifyContent: 'center',
backgroundColor: '#fff',
},
radio: {
  width: 24,
  height: 24,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
},
radioSelected: {
  borderColor: '#007aff',
},
radioDot: {
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: '#007aff',
},
radioLabel: {
  fontSize: 16,
  marginBottom: 10,
},
checkboxContainerr: {
 display: 'flex',
 flexDirection: 'row',
},
checkboxContainerr1:{
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 20,
},
checkboxContainerr2:{
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 20,
},
checkboxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10
  },
  checkbox: {
   width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    marginRight: 10,
 // },
  //checkboxText: {
  //marginLeft: 10
  },
  checkboxChecked: {
    backgroundColor: 'blue',
  },
  checkmark: {
    color: 'blue',
    fontSize: 16,
  },
  

button: {
  paddingHorizontal: 35,
  alignItems: 'center',
  marginTop: 30,
  shadowOpacity: '50',
  shadowRadius: '40',
  justifyContent: 'center',
  paddingVertical: 7,
  borderRadius: 25,
  elevation: 1,
  backgroundColor: 'orange',
},
buttonText: {
  color: 'white',
  fontWeight:'bold',
}
});

export default ProfileAdmissionForm;