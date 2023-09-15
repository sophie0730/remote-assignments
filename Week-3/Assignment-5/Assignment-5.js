//usign "Map" data sturcture
function twoSum(nums, target) {
  const myMap = new Map(); //建立map，相較object，map裡的key是唯一的，而這題不需要儲存重複的key，且key能儲存數字
  for (let i = 0; i < nums.length; i++) {
    const remainNum = target - nums[i]; //目前迴圈選到的值，與target還差多少
    if (myMap.has(remainNum)) {
      //has尋找key值。如果map裡剛好有差值，代表兩者加起來就是target
      return [myMap.get(remainNum), i]; //get值尋找value，而我們的value存的就是該值的index
    }

    myMap.set(nums[i], i); //如果map裡的值沒有匹配到，把這一次的data加進map裡 儲存格式為:key:value -> 數字:index
  }
  return []; //如果找不到
}

console.log(twoSum([2, 7, 11, 15], 9));
