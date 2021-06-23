/*
// CPP program to count subarrays whose maximum
// elements are in given range.
#include <bits/stdc++.h>
using namespace std;
//




// A C++ prgroam to contrcut all unique BSTs for keys from 1 to n
#include <bits/stdc++.h>
using namespace std;

// node structure
struct node
{
	int key;
	struct node *left, *right;
};

// A utility function to create a new BST node
struct node *newNode(int item)
{
	struct node *temp = new node;
	temp->key = item;
	temp->left = temp->right = NULL;
	return temp;
}

// A utility function to do preorder traversal of BST
void preorder(struct node *root)
{
	if (root != NULL)
	{
		cout << root->key << " ";
		preorder(root->left);
		preorder(root->right);
	}
}

// function for constructing trees
vector<struct node *> constructTrees(int start, int end)
{
	vector<struct node *> list;


	if (start > end)
	{
		list.push_back(NULL);
		return list;
	}


	for (int i = start; i <= end; i++)
	{
		
		vector<struct node *> leftSubtree = constructTrees(start, i - 1);

	
		vector<struct node *> rightSubtree = constructTrees(i + 1, end);

		for (int j = 0; j < leftSubtree.size(); j++)
		{
			struct node* left = leftSubtree[j];
			for (int k = 0; k < rightSubtree.size(); k++)
			{
				struct node * right = rightSubtree[k];
				struct node * node = newNode(i);// making value i as root
				node->left = left;			 // connect left subtree
				node->right = right;		 // connect right subtree
				list.push_back(node);		 // add this tree to list
			}
		}
	}
	return list;
}

// Driver Program to test above functions
int main()
{
	// Construct all possible BSTs
	vector<struct node *> totalTreesFrom1toN = constructTrees(1, 3);



	cout << "Preorder traversals of all constructed BSTs are \n";
	for (int i = 0; i < totalTreesFrom1toN.size(); i++)
	{
		preorder(totalTreesFrom1toN[i]);
		cout << endl;
	}
	return 0;
}







#include<bits/stdc++.h>
#define ll long long int
using namespace std;
 
int main()
{
    ios::sync_with_stdio(false); cin.tie(0);
    ll TC;
    cin >> TC;
    while (TC--)
    {
        ll n, k; cin >> n >> k;
        vector<ll> arr(n);
        for (auto &x : arr) cin >> x;
        ll s1 = 0, s2 = 0;
        sort(arr.begin(), arr.end());
        while (k--) {
            s1 += arr.back(); arr.pop_back();
            s2 += arr.back(); arr.pop_back();
        }
        s2 += arr.back();
        cout << max(s1, s2) << '\n';
    }













	#include <bits/stdc++.h>
#include "random"

using namespace std;

using ll = long long;
using ld = long double;
using pii = pair<int, int>;
using cd = complex<ld>;

void solve() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int &e : v) {
        cin >> e;
    }
    int maxPos = max_element(v.begin(), v.end()) - v.begin();
    int minPos = min_element(v.begin(), v.end()) - v.begin();
    cout << min({
            max(maxPos, minPos) + 1,
            (n - 1) - min(maxPos, minPos) + 1,
            (n - 1) - maxPos + minPos + 2,
            (n - 1) - minPos + maxPos + 2
    }) << "\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    cin >> t;
    while (t--) {
        solve();
    }
}










	#include <bits/stdc++.h>
#include "random"

using namespace std;




int main()
{
int t;
cin>>t;
while(t--)
{
int n;
cin>>n;
int *arr;
arr=new int[n];
 long int sum=0;
 int res=0;
for(int i=0;i<n;i++)
{
	cin>>arr[i];
}
for(int i=0;i<n;i++)
{
sum+=arr[i];
}
if(sum%n!=0)
cout<<"-1"<<endl;
else
{
 sum=sum/n;

 for(int i=0;i<n;i++)
 {
	 
	 if(arr[i]>sum)
res++;

 }

cout<<res<<endl;
}


    }









return 0;
}


	#include <bits/stdc++.h>
#include "random"


using namespace std;

 int fun(int *arr,int l,int r,int i,int j)
{

	if(i>j)
	return 0;

if((arr[i]+arr[j])>r)
 return fun(arr,l,r,i,j-1);
else if((arr[i]+arr[j])<l)
 return fun(arr,l,r,i+1,j);
else if((arr[i]+arr[j]<=r)&&(arr[i]+arr[j]>=l))
{

	cout<<arr[i]<<" nwdn"<<arr[j]<<endl;
  return 1+fun(arr,l,r,i+1,j)+fun(arr,l,r,i,j-1)-fun(arr,l,r,i+1,j-1);
}



}

int main()
{

int t;
cin>>t;
while(t--)
{
int n,l,r;
cin>>n>>l>>r;
int *arr;
arr=new int[n];
for(int i=0;i<n;i++)
{
cin>>arr[i];
}
int res=0;
sort(arr,arr+n);
for(int i=0;i<n;i++)
{
cout<<arr[i]<<" ";
}
cout<<endl;
 cout<<fun(arr,l,r,0,n-1)<<endl;


}

	return 0;
}
*/
/*


int getPairsCount(int *arr, int n, int sum)
{
    int count = 0; // Initialize result
 
    // Consider all possible pairs and check their sums
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (arr[i] + arr[j] <=sum)
                count++;
 
    return count;
}
ll getPairsCount(ll  *arr,ll n,ll x)
{
    ll l = 0, r = n-1;
    ll result = 0;
 
    while (l < r)
    {
        // If current left and current
        // right have sum smaller than x,
        // the all elements from l+1 to r
        // form a pair with current l.
        if (arr[l] + arr[r] < x)
        {
            result += (r - l);
            l++;
        }
 
        // Move to smaller value
        else
            r--;
    }
 
    return result;
}







int main()
{
ll t;
cin>>t;
while(t--)
{
ll n,l,r;
cin>>n>>l>>r;
ll *arr;
arr=new ll[n];
for(ll i=0;i<n;i++)
{
cin>>arr[i];
}
sort(arr,arr+n);
ll temp1,temp2;
	temp1=getPairsCount(arr, n, r+1);
	temp2=getPairsCount(arr, n, l);
cout<<temp1-temp2<<endl;

}


return 0;
}












#include <iostream>

using namespace std;

void solve () {
  int L, R;
  cin >> L >> R;

  int ans = 0;
  while (L != 0 || R != 0) {
    ans += R - L;
    L /= 10;
    R /= 10;
  }
  cout << ans << '\n';
}

int main () {
  ios::sync_with_stdio(false);
  cin.tie(0);
  
  int testc;
  cin >> testc;

  for (int i = 0; i < testc; i++) {
    solve();
  }
}






#include <bits/stdc++.h>
using namespace std;



 void getNumberOfBacklogOrders(vector<vector<int>>& order) {
        int n=order.size();
		priority_queue<int>buy;

        priority_queue<int, vector<int>, greater<int> >sell;
		for(int i=0;i<n;i++)
		{
if(order[i][2]==0)
{
while(order[i][1]--)
{

if(!sell.empty()&&sell.top()<=order[i][0])
{

	cout<<"sell top"<<sell.top()<<endl;
sell.pop();
}
else 
buy.push(order[i][0]);
}
}
else if(order[i][2]==1)
{


while(order[i][1]--)
{

if(!buy.empty()&&buy.top()>=order[i][0])
{
	cout<<"buy top"<<buy.top()<<endl;
buy.pop();
}
else
sell.push(order[i][0]);
}
}

             }

cout<<sell.size()<<" "<<buy.size()<<endl;
		}
        

int dp[31];


int umRollsToTarget(int d, int f, int target, int res = 0) {


  if (d == 0 || target <= 0) return dp[d]=d;
if(dp[d]!=-1)
return dp[d];


  for (auto i = 1; i <= f; ++i)
    res = (res + umRollsToTarget(d - 1, f, target - i)) % 1000000007;
  return  dp[d]=res;
}
        
     int main()
	 {
		 /*
vector<vector<int>>orders;

int n;
cin>>n;
int i=n;
while(i--)
{
vector<int>v;
int a,b,c;
cin>>a>>b>>c;
v.push_back(a);
v.push_back(b);
v.push_back(c);

orders.push_back(v);
v.clear();

}
for(int i=0;i<n;i++)
{

cout<<orders[i][0]<<" "<<orders[i][1]<<" "<<orders[i][2]<<endl;
}

getNumberOfBacklogOrders(orders);
memset(dp,-1,sizeof(dp));
int dice,face,target;
cin>>dice>>face>>target;
int res=0;
cout<<umRollsToTarget(dice,face,target,res)<<endl;


		return 0; 
	 }

         #include <bits/stdc++.h>
#include "random"
#define ll long long
using namespace std;

vector<string> neighbors(const string& code) {
        vector<string> result;
        for (int i = 0; i < 4; i++) {
            for (int diff = -1; diff <= 1; diff += 2) {
                string nei = code;
                nei[i] = (nei[i] - '0' + diff + 10) % 10 + '0';
                result.push_back(nei);
            }
        }
       // cout<<endl;
        //for(int i=0;i<result.size();i++)
        //cout<<result[i]<<" ";


        return result;
    }


    int  bfs(unordered_set<string>&st,string target)
    {
unordered_set<string>vis;
queue<string>q;
q.push("0000");
vis.insert("0000");
if (st.find("0000") != st.end()) {
        //cout << "-1" << endl;
        return -1;
    }
    int temp=0;
    bool visited=false;
while(!q.empty())
{

  //cout<<"temp"<<temp<<endl;

int len=q.size();
if(visited==true)
break;



while(len--)
{
 string  top=q.front();
if(top==target)
{
  visited=true;
  break;
}


 q.pop();
 vector<string>vec=neighbors(top);
for(int i=0;i<vec.size();i++)
{
if (st.find(vec[i]) == st.end()&&vis.find(vec[i]) == vis.end()) {
        q.push(vec[i]);
        vis.insert(vec[i]);
    }

}

}

temp++;
}
if(visited)
return temp-1;
else
return -1;
    }
 int main()   
 {

int n;
cin>>n;
unordered_set<string>st;
for(int i=0;i<n;i++)
{
  string pp;
  cin>>pp;
  st.insert(pp);
 }
 string target;
 cin>>target;

 cout<<bfs(st,target);


 return 0;
 }
        #include <bits/stdc++.h>
#include "random"
#define ll long long
using namespace std;
int main()
{
  int n;
  cin>>n;
vector<vector<int>>vec(n);
vector<bool>visited(n,false);
int edge;
cin>>edge;
for(int i=0;i<edge;i++)
{


}


  return 0;
}
 int edgeTraverse(int u , vector<vector<int>>&node, vector<bool>&hasApple,vector<bool>&Visited)
 {

  Visited[u] = true;       
        int cval = 0;
        for(int i=0;i<node[u].size();i++)
        {
            if(!Visited[node[u][i]])
                cval+= edgeTraverse(node[u][i], node, hasApple,Visited);                
        } 



if(cval>0)
return cval+2;
else
{
if(hasApple[u])
return 2;
else 0;


}

 }


 int minTime(int n, vector<vector<int>>& edges, vector<bool>& hasApple) {
        
        vector<vector<int>>Nodes(n);
        vector<bool>Visited(n,false);
        
        for(int i=0;i<edges.size();i++)
        {
            Nodes[edges[i][0]].push_back(edges[i][1]);
            Nodes[edges[i][1]].push_back(edges[i][0]);
        }

        Visited[0] = true;
        int result = 0;
        for(int i=0;i<Nodes[0].size();i++)
        {
            if(!Visited[Nodes[0][i]])
                result+= edgeTraverse(Nodes[0][i], Nodes, hasApple, Visited);
        }
        
        return result;



    }










    
     #include <bits/stdc++.h>
#include "random"
#define ll long long
using namespace std;


struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
   TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 };
 int  modify(TreeNode* root)
 {
if(root==nullptr)
return 0;
root->val=modify(root->left)+modify(root->right)+root->val;
 }

void printPreorder( TreeNode *root)
{
    if (root == NULL)
        return;
 
   
    cout << root->val << " ";
 
    
    printPreorder(root->left);
 
    printPreorder(root->right);
}




   TreeNode* getNewNode(int val)
{
  TreeNode* newNode = new TreeNode;
    newNode->val  = val;
    newNode->left  = NULL;
    newNode->right = NULL;

    return newNode;
}




int maxProduct(TreeNode* root) {
    modify(root);
printPreorder(root);
    }

int main()
{





return 0;

}
#include <bits/stdc++.h>
using namespace std;
const int m = 1e9 + 7;
class Solution {
public:
   int kInversePairs(int n, int k) {
      vector < vector <int> > dp(n + 1, vector <int>(k + 1));
      dp[0][0] = 1;
      for(int i = 1; i <= n; i++){
         dp[i][0] = 1;
         for(int j = 1; j <= k; j++){
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            dp[i][j] %= m;
            if(j >= i){
               dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + m) % m;
            }
         }
      }
      return dp[n][k];
   }
};
 int main(){
   Solution ob;
   cout << (ob.kInversePairs(10,5));
   return 0;
}

#include <bits/stdc++.h>
using namespace std;
const int m = 1e9 + 7;

 
 struct TreeNode {
      int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
  };
  vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        
    }

       map<TreeNode*, TreeNode>mp;
           unordered_set <TreeNode*>set;

 void bfs(TreeNode *root,int &target)
 {
queue<TreeNode*>q;
q.push(root);
unordered_set <TreeNode*>s;
s.insert(root);
while(!q.empty())
{
TreeNode* top=q.front();
q.pop();
if(top->val==target)
cout<<top<<endl;
if(top->left&&s.find(top->left)==)
{





}




 }
    int main()
    {
    TreeNode *newnode=new  TreeNode(3);
    //cout<<newnode->val<<" "<<newnode->left<<" "<<newnode->right<<endl;
newnode->left=new  TreeNode(5);
newnode->right=new  TreeNode(1);
newnode->left->left=new  TreeNode(6);
newnode->left->right=new  TreeNode(2);
newnode->right->left=new  TreeNode(0);
newnode->right->right=new  TreeNode(8);

newnode->left->right->left=new  TreeNode(7);
newnode->left->right->right=new  TreeNode(4);


int target=5;

TreeNode *tr=nullptr;
int k=2;

cout<<endl;
vector<bool>visited(9,false); 
bfs(newnode,target);


      return 0;
    }


    */