<template>
    <div id="computed">
        <h1>computed</h1>
        <div class="box">
            <!-- 할인율 계산하는 div -->
            <div class="computeData">
                <div>
                    <label>
                        <input class="checkbox-input" type="checkbox" v-model="couponDiscounted">
                        <span>쿠폰 할인</span>
                    </label>
                    <input type="number" v-model="couponPrice" min=1000 :disabled="!couponDiscounted">
                </div>       
                <div>
                    <label>
                        <input class="checkbox-input" type="checkbox" v-model="discountMap.general">
                        <span>일반 할인</span>
                    </label>
                    <input type="number" v-model="discountRate" min="1" :disabled="!discountMap.general">
                </div>
                <div>
                    <label>
                        <input class="checkbox-input" type="checkbox" v-model="discountMap.event">
                        <span>이벤트 할인</span>
                    </label>
                    <input type="number" min="1" v-model="eventDiscountRate" :disabled="!discountMap.event">
                </div>
                <div>
                    <label>
                        <input class="checkbox-input" type="checkbox" v-model="discountMap.staff">
                        <span>직원 할인</span>
                    </label>
                    <input type="number" min="1" v-model="staffDiscountRate" :disabled="!discountMap.staff">
                </div>
                <div>
                    <span>원가</span>
                    <input type="number" v-model="regularPrice">
                </div>
            </div>
            <!-- 할인가 보여주는 div -->
            <div class="showData">
                <img src="https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg">
                <div class="discounted-price" v-if="couponDiscounted">
                    <span>쿠폰 적용가 {{ makeComma(couponPrice) }} 원</span>
                </div>
                <div class="discounted-price" v-if="discountMap.general">
                    <span>일반 할인 {{ discountRate }} %</span>
                </div>
                <div class="discounted-price" v-if="discountMap.event">
                    <span>이벤트 할인 {{ eventDiscountRate }} %</span>
                </div>
                <div class="discounted-price" v-if="discountMap.staff">
                    <span>직원 할인 {{ staffDiscountRate }} %</span>
                </div>
                <span> {{ makeComma(totalPrice) }} 원</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'computed',
    data () {
        return {
            couponDiscounted: false, //쿠폰 할인여부
            discountMap: {
                general: false, // 일반 할인여부
                event: false, // 이벤트 할인여부
                staff: false //직원 할인여부
            },
            couponPrice: 1000,
            discountRate: 1,
            eventDiscountRate:1,
            staffDiscountRate:1,
            regularPrice: 0
        }
    },

    methods: {
        makeComma(val) {
            return (val+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    computed: {
        // 할인율 적용여부 확인 
        hasDiscountRate() {
            for (let key in this.discountMap) {
                if (this.discountMap[key]) return true
            } return false 
        },
        totalPrice() {
            let finalPrice = this.regularPrice 
            let totalDCRate = 0 // 총 할인율 
            //쿠폰 선택 되었을 때
            if (this.couponDiscounted) {
                finalPrice -= this.couponPrice
            } 
            // 일반 할인이 있는경우 
            if (this.discountMap.general) {
                totalDCRate += Number(this.discountRate)
            } 
            // 이벤트 할인이 있는경우 
            if (this.discountMap.event) {
                totalDCRate += Number(this.eventDiscountRate)
            } 
            // 직원 할인이 있는경우 
            if (this.discountMap.staff) {
                totalDCRate += Number(this.staffDiscountRate)
            } 
            if (totalDCRate > 0) {
                finalPrice = finalPrice - Math.floor(finalPrice * totalDCRate / 100)
            }

            return finalPrice
        }
    }
}
</script>

<style scoped>
.box {
    width:800px;
    display: flex;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 20px;
}

.computeData {
    width:500px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin:10px;
    padding:10px;
    font-weight: bold;
}

.showData {
    width:400px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin:10px;
    padding: 10px;
}

.discounted-price {
    padding:5px;
    font-weight:bold;
    color:red;
    background-color: rgb(255, 230, 234);
}

.checkbox-input {
    float: left;
}

div {
    margin: 10px 0px;
}

input {
    height:22px;
    border: 2px solid #ddd;
    border-radius: 4px;
    float:right;
}

img {
    width: 350px;
    height: 300px;
}

span {
    font-weight: bold;
}
</style>