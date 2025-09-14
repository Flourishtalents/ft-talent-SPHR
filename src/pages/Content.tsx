import React from 'react';
import { UploadCloud } from 'lucide-react';

export default function Content() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">Add Content</h1>
        <p className="text-brand-secondary mb-8">Upload your creative work to share with the world.</p>

        <div className="bg-brand-mid border border-brand-light p-8 rounded-2xl">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brand-text mb-2">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Enter a title for your content"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brand-text mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Tell us more about your content"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">Content Type</label>
                <select className="w-full px-4 py-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all">
                  <option value="video" className="bg-brand-dark">Video</option>
                  <option value="music" className="bg-brand-dark">Music</option>
                  <option value="photo" className="bg-brand-dark">Photo</option>
                  <option value="blog" className="bg-brand-dark">Blog</option>
                  <option value="template" className="bg-brand-dark">Template</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brand-text mb-2">Upload File</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-brand-light border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-brand-secondary" />
                    <div className="flex text-sm text-brand-secondary">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-transparent rounded-md font-medium text-brand-accent hover:text-brand-accent/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-accent"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-brand-secondary">PNG, JPG, GIF up to 10MB. MP4, MOV up to 100MB.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-brand-accent text-brand-text font-semibold rounded-xl hover:shadow-xl transition-all"
              >
                Submit for Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
