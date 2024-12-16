<script setup lang="ts">
import { computed } from 'vue';
import { holidayDataType, longWeekendDataType } from '../../types/holidayTypes';
type propsTypes = {
  day: number
  dayData?: Partial<holidayDataType>
  longWekendData?: Partial<longWeekendDataType>
}
const props = defineProps<propsTypes>();

function determineBridgeDay(bridgeDays?: string[]) {
  if (bridgeDays?.length) {
    for (const date of bridgeDays) {
      return `${props.day}` == date.slice(-2)
    }
  }
}

const partOfLongWeekend = computed(() => {
  const data = props.longWekendData
  if (data?.startDate && data?.endDate) {
    const lastStartDateParts = parseInt(data?.startDate?.slice(-2), 10)
    const lastEndDateParts = parseInt(data?.endDate?.slice(-2), 10)
    const isBridgeDay = data.needBridgeDay ? determineBridgeDay(data?.bridgeDays) : false
    
    return {
      partOfLongWeekend: !!(props.day >= lastStartDateParts && props.day <= lastEndDateParts),
      isBridgeDay
    }
  }

  return {
      partOfLongWeekend: false,
      isBridgeDay: false
    };
})
</script>

<template>
  <div :class="{'bg-astral-50' : !day}" class="p-2 min-h-20 border border-astral-200 text-center grid grid-cols-1 w-full">
    <span v-if="partOfLongWeekend?.partOfLongWeekend" :class=" partOfLongWeekend?.isBridgeDay ? 'bg-[red]': 'bg-[#00fff2]'" class="min-h-1 max-h-1"> &nbsp; </span>
    <span v-if="day">
      {{ day }}
    </span>
    <span v-if="dayData?.localName" class="p-2 bg-astral-400 text-[#fff] text-center truncate relative">
      <span v-tooltip.top.focus="`${dayData.localName} - ${dayData.name}`" tabindex="1" class="absolute top-0 right-0">
        <i class="pi pi-plus" ></i>
      </span>
      {{ dayData?.localName }}
    </span>
  </div>
</template>