import './Demo.css';
import { AvivaHeader } from './components/AvivaHeader';
import { BannerNotification } from './components/BannerNotification';
import SegmentControl from './components/SegmentControl';
import Test from './components/Test';
import DateTextBox from './components/DateTextBox';
import ExpandableInfo from './components/ExpandableInfo';
import BrochureInfo from './components/BrochureInfo';
function Demo() {

  const importantInfoContent = [
    'MyLongTermCare / MyLongTermCare Plus (Supplements) can be purchased by CareShield Life (CSHL) or ElderShield (ESH) policyholders.',
    'If purchased by ESH policyholders before the transfer of ESH to Government administration, these Supplements are consider as ESH Supplements regulated under CPF (Withdrawals for ESH Scheme) Regulations. Otherwise, these Supplements are considered as CSHL Supplements regulated under the CSHL and Long-Term Care Act.'
  ];
  const gender = ["MyLongTermCare", "MyLongTermCare Plus"];
  const handleGenderChange = (event, value) => {
    console.log("Selected Gender " + value);
  };
  const handleDateChange = (value) => {
    console.log("Selected Date " + value);
  };
  return (
    <>
      <AvivaHeader />
      <BannerNotification
        size="sm"
        closeEnabled={true}
        backgroundColor="#ecf8ff"
        label="This is a notification message."
      />
      <SegmentControl selectionItems={gender} size="large" onControlValueChange={handleGenderChange}></SegmentControl>
      <SegmentControl selectionItems={gender} size="small" onControlValueChange={handleGenderChange}></SegmentControl>
      <Test></Test>
      <DateTextBox
        label="Date of Birth"
        onDateValueChange={handleDateChange}></DateTextBox>
      <ExpandableInfo content={importantInfoContent} title="Important Note" />
      <BrochureInfo></BrochureInfo>
    </>
  );
}

export default Demo;
