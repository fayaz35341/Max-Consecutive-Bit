class Solution:
    def maxConsecBits(self, arr):
        #code here 
        maxi=0
        c=0
        r=0
        for i in range(len(arr)):
            if arr[i]==1:
                c+=1
                r=0
                maxi=max(maxi,c)
            elif arr[i]==0:
                r+=1
                c=0
                maxi=max(maxi,r)
            
        return maxi
