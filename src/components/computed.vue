<template>
    <div id="computed">
        <h1>computed</h1>
        <div id="box">
            <!-- 할인율 계산하는 div -->
            <div id="computeData">
                <div>
                    <input type="checkbox" :coupon="coupon" @click="changeCouponStatus">
                    <span>쿠폰 할인</span>
                    <input type="number" v-model="couponPrice" min=1000 :disabled="!this.coupon">
                </div>       
                <div>
                    <input type="checkbox" :discount="discount" @click="changeDiscountStatus">
                    <span>일반 할인</span>
                    <input type="number" v-model="discountRate" min=1 :disabled="!this.discount">
                </div>
                <div>
                    <input type="checkbox" :eventDiscount="eventDiscount" @click="changeEventDiscountStatus">
                    <span>이벤트 할인</span>
                    <input type="number" min=1 v-model="eventDiscountRate" :disabled="!this.eventDiscount">
                </div>
                <div>
                    <input type="checkbox" :staff="staff" @click="changeStaffDiscountStatus">
                    <span>직원 할인</span>
                    <input type="number" min=1 v-model="staffDiscountRate" :disabled="!this.staff">
                </div>
                <div>
                    <span>원가</span>
                    <input v-model="regularPrice">
                </div>
            </div>
            <!-- 할인가 보여주는 div -->
            <div id="showData">
                <div class="discountedPrice" v-if="coupon">
                    <span>쿠폰 적용가 {{ couponPrice.toLocaleString() }} 원</span>
                </div>
                <div class="discountedPrice" v-if="discount">
                    <span>일반 할인 {{ discountRate }} %</span>
                </div>
                <div class="discountedPrice" v-if="eventDiscount">
                    <span>이벤트 할인 {{ eventDiscountRate }} %</span>
                </div>
                <div class="discountedPrice" v-if="staff">
                    <span>직원 할인 {{ staffDiscountRate }} %</span>
                </div>
                <span> {{ totalPrice.toLocaleString() }} 원</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            coupon: false,
            discount: false,
            eventDiscount: false,
            staff: false,
            couponPrice: 1000,
            discountRate: 1,
            eventDiscountRate:1,
            staffDiscountRate:1,
            regularPrice: ''
        }
    },
    methods: {
        changeCouponStatus() {
            if (this.coupon) {
                this.coupon = false
            } else {
                this.coupon = true
            }
        },
        changeDiscountStatus() {
            if (this.discount) {
                this.discount = false
            } else {
                this.discount = true
            }
        },
        changeEventDiscountStatus() {
            if (this.eventDiscount) {
                this.eventDiscount = false
            } else {
                this.eventDiscount = true
            }
        },
         changeStaffDiscountStatus() {
            if (this.staff) {
                this.staff = false
            } else {
                this.staff = true
            }
        },
    },
    computed: {
        // 할인 하나씩만 적용 ok 
        // 위에서부터 순서대로 적용 ok
        // 골라서 적용 안됨 ==============================????????=============================
        totalPrice: function() {
            var dcRate = this.discount || this.eventDiscount || this.staff
            if (this.coupon) {
                if (this.coupon && this.discount && !this.eventDiscount) {
                    return this.regularPrice - this.couponPrice - (this.regularPrice * (this.discountRate * 0.01))
                } else if (this.coupon && this.discount && this.eventDiscount && !this.staff) {
                    return this.regularPrice - this.couponPrice - (this.regularPrice * (this.discountRate * 0.01)) - (this.regularPrice * (this.eventDiscountRate * 0.01))
                }  else if (this.coupon && this.discount && this.eventDiscount && this.staff) {
                    return this.regularPrice - this.couponPrice - (this.regularPrice * (this.discountRate * 0.01)) - (this.regularPrice * (this.eventDiscountRate * 0.01)) - (this.regularPrice * (this.staffDiscountRate * 0.01))
                }
                return this.regularPrice - this.couponPrice
            } else if (dcRate) {
                if (this.coupon) {
                    return this.regularPrice - this.couponPrice
                } else if (this.discount) {
                    return this.regularPrice - (this.regularPrice * (this.discountRate * 0.01))
                } else if (this.eventDiscount) {
                    return this.regularPrice - (this.regularPrice * (this.eventDiscountRate * 0.01))
                } else {
                    return this.regularPrice - (this.regularPrice * (this.staffDiscountRate * 0.01))
                }
            } else {
                return this.regularPrice
            }
        }

    }
}
</script>

<style scoped>
#box {
    width:800px;
    display: flex;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 20px;
}

#computeData {
    width:500px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin:10px;
    padding:10px;
    font-weight: bold;
}

#showData {
    width:400px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin:10px;
    padding: 10px;
}

.discountedPrice {
    padding:5px;
    font-weight:bold;
    color:red;
    background-color: rgb(255, 230, 234);
}

div {
    margin: 10px 0px;
}
input {
    height:22px;
    border: 2px solid #ddd;
    border-radius: 4px;
}
</style>