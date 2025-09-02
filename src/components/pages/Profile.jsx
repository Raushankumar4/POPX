const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6">
      <div className="w-[300px] min-h-[550px] border border-gray-300 rounded bg-[#F7F8F9]">
        
        <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-base font-medium text-gray-900">Account Settings</h1>
        </div>

        
        <div className="px-6 py-4 border-b border-dashed border-gray-300">
          <div className="flex items-start space-x-4 mb-3">
           
            <div className="relative w-14 h-14">
              <img
                src="/profile-image.webp"
                alt="Profile"
                className="w-14 h-14 object-cover rounded-full border border-gray-300"
                onError={() => console.log("Profile image failed")}
              />
              <img
                src="/purple-icon.webp"
                alt="Camera"
                className="absolute bottom-0 right-0 w-5 h-5"
                onError={() => console.log("Icon WebP failed")}
              />
            </div>

            
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-gray-900 leading-tight">Marry Doe</h2>
              <p className="text-xs text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>

        
          <p className="text-xs text-gray-700 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        
        <div className="px-6 py-6"/>
      </div>
    </div>
  );
};

export default Profile;
