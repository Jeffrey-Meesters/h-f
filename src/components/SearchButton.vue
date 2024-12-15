<script setup lang="ts">
import { useHolidayDataStore } from '../stores/useHolidayDataStore';

type allowedMethods =     
  "isTodayPublicHoliday"
  | "getLongWeekends"
  | "getPublicHolidays"
  | "getTodayIsPublicHoliday"
  | "getUpcommingHolidays"
  | "getUpcommingHolidaysWorldWide"

type propsTypes = {
  buttonText: string
  usedForStoreActionName: allowedMethods
}
const holidayDataStore = useHolidayDataStore();
const props = defineProps<propsTypes>()

const performAction = async () => {
  const service = holidayDataStore[props.usedForStoreActionName];
  if (!service || typeof service !== 'function') { // to satisfy TS
    // Developer error, that somehow got passed the Union TS check
    console.error(`Method ${props.usedForStoreActionName} does not exists`)
    return;
  }
  
  await service();
}

</script>
<template>
  <Button :label="buttonText" @click="performAction"/>
</template>