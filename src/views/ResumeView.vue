<template>
  <pdf src="@/assets/halmai-mcrae-resume-merged.pdf"></pdf>
</template>

<script type="module" lang="ts">
import { pdf } from "vue-pdf";

export default {
  components: {
    pdf,
  },
};
</script>
